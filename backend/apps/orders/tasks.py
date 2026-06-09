import logging
from celery import shared_task
from django.conf import settings
from django.core.mail import send_mail

logger = logging.getLogger(__name__)

TO = "maple@cambridgelogic.com"


@shared_task(bind=True, max_retries=3, default_retry_delay=60)
def send_order_notification(self, order_id: str) -> None:
    from apps.orders.models import Order

    try:
        order = Order.objects.get(id=order_id)
    except Order.DoesNotExist:
        logger.error("send_order_notification: Order %s not found", order_id)
        return

    amount = f"£{order.amount / 100:.2f}"

    body = f"""New Kit Order — Payment Confirmed
═══════════════════════════════════

Stripe Session: {order.stripe_session_id}
Amount paid:    {amount}

─── Kit ──────────────────────────
{order.kit_name} ({order.kit_id})

─── Contact ──────────────────────
Name:         {order.name}
Organisation: {order.organisation or "—"}
Email:        {order.email}
Phone:        {order.phone or "—"}

─── Delivery address ─────────────
{order.delivery_address}

─── Property address ─────────────
{order.property_address}

─── Notes ────────────────────────
{order.notes or "—"}""".strip()

    try:
        send_mail(
            subject=f"New order: {order.kit_name} — {order.name}",
            message=body,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[TO],
            fail_silently=False,
        )
        logger.info("Order notification sent for %s", order_id)
    except Exception as exc:
        logger.error("send_order_notification failed for %s: %s", order_id, exc)
        raise self.retry(exc=exc)
