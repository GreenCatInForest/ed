import uuid
from django.conf import settings
from django.db import models


class Order(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    stripe_session_id = models.CharField(max_length=255, unique=True)

    kit_id = models.CharField(max_length=50)
    kit_name = models.CharField(max_length=255)
    amount = models.PositiveIntegerField()  # pence
    currency = models.CharField(max_length=3, default="gbp")

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True, blank=True,
        related_name="orders",
    )
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=50, blank=True)
    organisation = models.CharField(max_length=255, blank=True)
    delivery_address = models.TextField(blank=True)
    property_address = models.TextField(blank=True)
    notes = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        app_label = "orders"
        ordering = ["-created_at"]
        indexes = [
            models.Index(fields=["email"], name="orders_order_email_idx"),
            models.Index(fields=["stripe_session_id"], name="orders_order_session_idx"),
        ]

    def __str__(self):
        return f"{self.name} — {self.kit_name}"
