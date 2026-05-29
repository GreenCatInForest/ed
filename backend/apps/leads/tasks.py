import logging
from celery import shared_task
from django.conf import settings
from django.core.mail import send_mail
from django.utils import timezone

logger = logging.getLogger(__name__)


@shared_task(bind=True, max_retries=3, default_retry_delay=60)
def send_download_email(self, lead_id: str) -> None:
    from apps.leads.models import Lead

    try:
        lead = Lead.objects.get(id=lead_id)
    except Lead.DoesNotExist:
        logger.error("send_download_email: Lead %s not found", lead_id)
        return

    download_url = (
        f"{settings.SITE_URL}/api/downloads/{lead.download_token}"
    )

    subject = f"Your download: {lead.guide_name}"
    body = f"""Hi {lead.name},

Here is your download link for {lead.guide_name}:

  {download_url}

This link expires in 7 days. If you have any questions, reply to this email.

— Maple Diagnostics
"""

    try:
        send_mail(
            subject=subject,
            message=body,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[lead.email],
            fail_silently=False,
        )
        lead.email_sent_at = timezone.now()
        lead.save(update_fields=["email_sent_at"])
        logger.info("Download email sent to %s for lead %s", lead.email, lead_id)
    except Exception as exc:
        logger.error("send_download_email failed for lead %s: %s", lead_id, exc)
        raise self.retry(exc=exc)
