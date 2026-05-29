from django.contrib import admin
from apps.leads.models import Lead


@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "guide_name", "role", "marketing_consent", "email_sent_at", "created_at")
    list_filter = ("guide_name", "role", "marketing_consent")
    search_fields = ("name", "email", "organisation")
    readonly_fields = ("id", "download_token", "ip_address", "user_agent", "source_url", "created_at")
    ordering = ("-created_at",)
