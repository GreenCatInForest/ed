from django.contrib import admin
from apps.orders.models import Order


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ["name", "email", "kit_name", "amount_display", "created_at", "user"]
    list_filter = ["kit_id", "currency"]
    search_fields = ["name", "email", "stripe_session_id", "organisation"]
    readonly_fields = ["id", "stripe_session_id", "created_at"]

    def amount_display(self, obj):
        return f"£{obj.amount / 100:.2f}"
    amount_display.short_description = "Amount"
