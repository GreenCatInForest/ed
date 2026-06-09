from django.apps import apps
from django.conf import settings
from django.db import transaction

from apps.orders.models import Order


def record_order(session: dict) -> tuple[Order, bool]:
    """Idempotent. Returns (order, created). created=False means already processed."""
    meta = session.get("metadata") or {}
    email = (session.get("customer_email") or "").lower()

    User = apps.get_model(settings.AUTH_USER_MODEL)
    user = User.objects.filter(email__iexact=email).first()

    with transaction.atomic():
        order, created = Order.objects.get_or_create(
            stripe_session_id=session["id"],
            defaults={
                "kit_id":           meta.get("kit_id", ""),
                "kit_name":         meta.get("kit_name", ""),
                "amount":           session.get("amount_total") or 0,
                "currency":         session.get("currency", "gbp"),
                "user":             user,
                "name":             meta.get("customer_name", ""),
                "email":            email,
                "phone":            meta.get("customer_phone", ""),
                "organisation":     meta.get("customer_org", ""),
                "delivery_address": meta.get("delivery_address", ""),
                "property_address": meta.get("property_address", ""),
                "notes":            meta.get("notes", ""),
            },
        )
    return order, created
