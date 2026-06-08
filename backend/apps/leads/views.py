import logging

from django.conf import settings
from django.http import FileResponse, Http404
from django.utils import timezone
from rest_framework.permissions import AllowAny
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.leads.models import Lead
from apps.leads.serializers import LeadCreateSerializer
from apps.leads.services import create_lead, get_client_ip
from apps.leads.tasks import send_download_email

logger = logging.getLogger(__name__)

DOCUMENT_MAP = {
    "10-Day Investigation Checklist": "10-day-investigation-checklist.pdf",
    "Section 11(6) notice template": "section-11-6-notice-template.pdf",
    "Section 11(6) notice template (PDF)": "section-11-6-notice-template.pdf",
    "Section 11(6) notice template (Word)": "section-11-6-notice-template.docx",
}


class LeadDownloadRequestView(APIView):
    permission_classes = [AllowAny]

    def post(self, request: Request) -> Response:
        serializer = LeadCreateSerializer(data=request.data)

        if not serializer.is_valid():
            errors = serializer.errors
            # Honeypot hit or competitor domain — return 200 silently
            flat_errors = str(errors)
            if "__honeypot__" in flat_errors or "__competitor__" in flat_errors:
                logger.info("Silently rejected submission: %s", flat_errors[:80])
                return Response({"ok": True})
            return Response({"ok": False, "errors": errors}, status=400)

        lead = create_lead(
            validated_data=serializer.validated_data,
            ip_address=get_client_ip(request),
            user_agent=request.META.get("HTTP_USER_AGENT", ""),
            source_url=request.META.get("HTTP_REFERER", ""),
        )

        send_download_email.delay(str(lead.id))

        return Response({"ok": True})


class DocumentDownloadView(APIView):
    permission_classes = [AllowAny]

    def get(self, request: Request, token: str) -> FileResponse:
        try:
            lead = Lead.objects.get(download_token=token)
        except Lead.DoesNotExist:
            raise Http404

        if timezone.now() > lead.token_expires_at:
            return Response({"error": "This download link has expired."}, status=410)

        filename = DOCUMENT_MAP.get(lead.guide_name)
        if not filename:
            logger.warning("No document mapped for guide_name=%r", lead.guide_name)
            raise Http404

        filepath = settings.BASE_DIR / "documents" / filename
        if not filepath.exists():
            logger.error("Document file missing: %s", filepath)
            raise Http404

        return FileResponse(filepath.open("rb"), as_attachment=True, filename=filename)
