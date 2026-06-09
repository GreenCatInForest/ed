import logging

from rest_framework.permissions import AllowAny
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.orders.services import record_order
from apps.orders.tasks import send_order_notification

logger = logging.getLogger(__name__)


class RecordOrderView(APIView):
    """Called by the Next.js Stripe webhook after signature verification."""
    permission_classes = [AllowAny]

    def post(self, request: Request) -> Response:
        session = request.data
        if not session.get("id"):
            return Response({"error": "Missing session id"}, status=400)

        try:
            order, created = record_order(session)
        except Exception as exc:
            logger.error("record_order failed: %s", exc)
            return Response({"error": "Failed to record order"}, status=500)

        if created:
            send_order_notification.delay(str(order.id))

        return Response({"ok": True, "created": created})
