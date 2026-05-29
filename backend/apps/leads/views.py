import logging

from rest_framework.permissions import AllowAny
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.leads.serializers import LeadCreateSerializer
from apps.leads.services import create_lead, get_client_ip
from apps.leads.tasks import send_download_email

logger = logging.getLogger(__name__)


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
