from datetime import timedelta
from unittest.mock import MagicMock, patch

from django.test import TestCase, override_settings
from django.utils import timezone
from rest_framework import status
from rest_framework.test import APIClient, APITestCase

from apps.leads.models import Lead
from apps.leads.serializers import LeadCreateSerializer
from apps.leads.services import create_lead, get_client_ip


# ─────────────────────────────────────────────────────────────
# Helpers
# ─────────────────────────────────────────────────────────────

def _valid_payload(**overrides):
    return {
        "guide_name": "Section 11(6) notice template",
        "name": "Jane Smith",
        "email": "jane@example.co.uk",
        "organisation": "Smith Surveyors Ltd",
        "role": "surveyor",
        "properties_range": "6-20",
        "marketing_consent": False,
        "company_website": "",
        **overrides,
    }


def _make_lead(**overrides):
    validated = {
        "guide_name": "Section 11(6) notice template",
        "name": "Jane Smith",
        "email": "jane@example.co.uk",
        **overrides,
    }
    return create_lead(validated_data=validated, ip_address="1.2.3.4", user_agent="Test/1.0", source_url="")


# ─────────────────────────────────────────────────────────────
# Serializer
# ─────────────────────────────────────────────────────────────

class LeadCreateSerializerTest(TestCase):

    def test_valid_data_passes(self):
        s = LeadCreateSerializer(data=_valid_payload())
        self.assertTrue(s.is_valid(), s.errors)

    def test_honeypot_filled_is_rejected(self):
        s = LeadCreateSerializer(data=_valid_payload(company_website="https://evil.com"))
        self.assertFalse(s.is_valid())
        self.assertIn("__honeypot__", str(s.errors))

    def test_competitor_switchee_rejected(self):
        s = LeadCreateSerializer(data=_valid_payload(email="user@switchee.co"))
        self.assertFalse(s.is_valid())
        self.assertIn("__competitor__", str(s.errors))

    def test_competitor_aico_rejected(self):
        s = LeadCreateSerializer(data=_valid_payload(email="user@aico.co.uk"))
        self.assertFalse(s.is_valid())
        self.assertIn("__competitor__", str(s.errors))

    def test_competitor_fireangel_rejected(self):
        s = LeadCreateSerializer(data=_valid_payload(email="user@fireangel.co.uk"))
        self.assertFalse(s.is_valid())
        self.assertIn("__competitor__", str(s.errors))

    def test_email_normalised_to_lowercase(self):
        s = LeadCreateSerializer(data=_valid_payload(email="Jane@EXAMPLE.co.uk"))
        self.assertTrue(s.is_valid(), s.errors)
        self.assertEqual(s.validated_data["email"], "jane@example.co.uk")

    def test_missing_name_fails(self):
        data = _valid_payload()
        del data["name"]
        s = LeadCreateSerializer(data=data)
        self.assertFalse(s.is_valid())
        self.assertIn("name", s.errors)

    def test_missing_email_fails(self):
        data = _valid_payload()
        del data["email"]
        s = LeadCreateSerializer(data=data)
        self.assertFalse(s.is_valid())
        self.assertIn("email", s.errors)

    def test_optional_fields_default_correctly(self):
        s = LeadCreateSerializer(data={"guide_name": "T", "name": "T", "email": "t@example.com"})
        self.assertTrue(s.is_valid(), s.errors)
        vd = s.validated_data
        self.assertEqual(vd["organisation"], "")
        self.assertEqual(vd["role"], "")
        self.assertEqual(vd["properties_range"], "")
        self.assertFalse(vd["marketing_consent"])

    def test_company_website_excluded_from_validated_data(self):
        s = LeadCreateSerializer(data=_valid_payload())
        self.assertTrue(s.is_valid())
        self.assertNotIn("company_website", s.validated_data)


# ─────────────────────────────────────────────────────────────
# Service
# ─────────────────────────────────────────────────────────────

class CreateLeadServiceTest(TestCase):

    def test_creates_lead_with_all_fields(self):
        lead = create_lead(
            validated_data={
                "guide_name": "Section 11(6) notice template",
                "name": "Jane Smith",
                "email": "jane@example.co.uk",
                "organisation": "Smith Surveyors Ltd",
                "role": "surveyor",
                "properties_range": "6-20",
                "marketing_consent": True,
            },
            ip_address="1.2.3.4",
            user_agent="Mozilla/5.0",
            source_url="http://localhost:3001/awaabs-law/private-landlords",
        )
        self.assertIsNotNone(lead.pk)
        self.assertEqual(lead.email, "jane@example.co.uk")
        self.assertEqual(lead.ip_address, "1.2.3.4")
        self.assertEqual(lead.user_agent, "Mozilla/5.0")
        self.assertTrue(lead.marketing_consent)
        self.assertIsNotNone(lead.download_token)
        self.assertIsNone(lead.email_sent_at)

    def test_token_expiry_is_7_days(self):
        lead = _make_lead()
        delta = lead.token_expires_at - timezone.now()
        self.assertGreaterEqual(delta, timedelta(days=6, hours=23))
        self.assertLessEqual(delta, timedelta(days=7, seconds=5))

    def test_download_token_is_unique_per_lead(self):
        lead1 = _make_lead()
        lead2 = _make_lead()
        self.assertNotEqual(lead1.download_token, lead2.download_token)

    def test_get_client_ip_uses_forwarded_for(self):
        req = MagicMock()
        req.META = {"HTTP_X_FORWARDED_FOR": "1.2.3.4, 5.6.7.8", "REMOTE_ADDR": "127.0.0.1"}
        self.assertEqual(get_client_ip(req), "1.2.3.4")

    def test_get_client_ip_falls_back_to_remote_addr(self):
        req = MagicMock()
        req.META = {"REMOTE_ADDR": "9.10.11.12"}
        self.assertEqual(get_client_ip(req), "9.10.11.12")


# ─────────────────────────────────────────────────────────────
# View (integration)
# ─────────────────────────────────────────────────────────────

class LeadDownloadRequestViewTest(APITestCase):

    def setUp(self):
        self.client = APIClient()
        self.url = "/api/leads/download-request/"

    @patch("apps.leads.views.send_download_email.delay")
    def test_valid_submission_returns_200_ok(self, mock_delay):
        res = self.client.post(self.url, _valid_payload(), format="json")
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertTrue(res.data["ok"])

    @patch("apps.leads.views.send_download_email.delay")
    def test_valid_submission_persists_lead(self, mock_delay):
        self.client.post(self.url, _valid_payload(), format="json")
        self.assertEqual(Lead.objects.count(), 1)
        lead = Lead.objects.first()
        self.assertEqual(lead.email, "jane@example.co.uk")
        self.assertEqual(lead.organisation, "Smith Surveyors Ltd")

    @patch("apps.leads.views.send_download_email.delay")
    def test_valid_submission_fires_celery_task(self, mock_delay):
        self.client.post(self.url, _valid_payload(), format="json")
        self.assertTrue(mock_delay.called)
        lead = Lead.objects.first()
        mock_delay.assert_called_once_with(str(lead.id))

    def test_honeypot_silently_returns_200_no_lead(self):
        res = self.client.post(self.url, _valid_payload(company_website="https://spam.com"), format="json")
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertTrue(res.data["ok"])
        self.assertEqual(Lead.objects.count(), 0)

    def test_competitor_domain_silently_returns_200_no_lead(self):
        for domain in ("switchee.co", "aico.co.uk", "fireangel.co.uk"):
            with self.subTest(domain=domain):
                Lead.objects.all().delete()
                res = self.client.post(self.url, _valid_payload(email=f"user@{domain}"), format="json")
                self.assertEqual(res.status_code, status.HTTP_200_OK)
                self.assertTrue(res.data["ok"])
                self.assertEqual(Lead.objects.count(), 0)

    def test_missing_name_returns_400(self):
        data = _valid_payload()
        del data["name"]
        res = self.client.post(self.url, data, format="json")
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)

    def test_invalid_email_returns_400(self):
        res = self.client.post(self.url, _valid_payload(email="not-an-email"), format="json")
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)

    def test_get_method_not_allowed(self):
        res = self.client.get(self.url)
        self.assertEqual(res.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

    def test_put_method_not_allowed(self):
        res = self.client.put(self.url, _valid_payload(), format="json")
        self.assertEqual(res.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)


# ─────────────────────────────────────────────────────────────
# Celery task (called synchronously — no broker needed)
# ─────────────────────────────────────────────────────────────

class SendDownloadEmailTaskTest(TestCase):

    @patch("apps.leads.tasks.send_mail")
    def test_sends_email_to_lead(self, mock_send_mail):
        lead = _make_lead()
        from apps.leads.tasks import send_download_email
        send_download_email.apply(args=(str(lead.id),))
        mock_send_mail.assert_called_once()
        _, kwargs = mock_send_mail.call_args
        self.assertIn(lead.email, kwargs.get("recipient_list", []))

    @patch("apps.leads.tasks.send_mail")
    def test_email_body_contains_download_token(self, mock_send_mail):
        lead = _make_lead()
        from apps.leads.tasks import send_download_email
        send_download_email.apply(args=(str(lead.id),))
        _, kwargs = mock_send_mail.call_args
        self.assertIn(str(lead.download_token), kwargs.get("message", ""))

    @patch("apps.leads.tasks.send_mail")
    def test_email_sent_at_is_stamped(self, mock_send_mail):
        lead = _make_lead()
        from apps.leads.tasks import send_download_email
        send_download_email.apply(args=(str(lead.id),))
        lead.refresh_from_db()
        self.assertIsNotNone(lead.email_sent_at)

    @patch("apps.leads.tasks.send_mail")
    def test_nonexistent_lead_id_does_not_raise(self, mock_send_mail):
        import uuid
        from apps.leads.tasks import send_download_email
        # Should log and return, not raise
        send_download_email.apply(args=(str(uuid.uuid4()),))
        mock_send_mail.assert_not_called()
