from datetime import timedelta
from django.utils import timezone
from apps.leads.models import Lead


TOKEN_TTL_DAYS = 7


def create_lead(
    *,
    validated_data: dict,
    ip_address: str | None,
    user_agent: str,
    source_url: str,
) -> Lead:
    return Lead.objects.create(
        guide_name=validated_data["guide_name"],
        name=validated_data["name"],
        email=validated_data["email"],
        organisation=validated_data.get("organisation", ""),
        role=validated_data.get("role", ""),
        properties_range=validated_data.get("properties_range", ""),
        marketing_consent=validated_data.get("marketing_consent", False),
        ip_address=ip_address,
        user_agent=user_agent,
        source_url=source_url,
        token_expires_at=timezone.now() + timedelta(days=TOKEN_TTL_DAYS),
    )


def get_client_ip(request) -> str | None:
    forwarded_for = request.META.get("HTTP_X_FORWARDED_FOR")
    if forwarded_for:
        return forwarded_for.split(",")[0].strip()
    return request.META.get("REMOTE_ADDR")
