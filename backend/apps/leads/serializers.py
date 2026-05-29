from rest_framework import serializers

# Competitor domains that should be silently rejected.
# Add new entries here without touching view or service logic.
_BLOCKED_DOMAINS = frozenset([
    "switchee.co",
    "aico.co.uk",
    "fireangel.co.uk",
])

ROLE_CHOICES = [
    "private-landlord",
    "housing-association",
    "surveyor",
    "letting-agent",
    "other",
    "",
]

PROPERTIES_RANGE_CHOICES = ["1-5", "6-20", "21-50", "51-200", "200+", ""]


class LeadCreateSerializer(serializers.Serializer):
    guide_name = serializers.CharField(max_length=255)
    name = serializers.CharField(max_length=255)
    email = serializers.EmailField()
    organisation = serializers.CharField(max_length=255, required=False, allow_blank=True, default="")
    role = serializers.ChoiceField(choices=ROLE_CHOICES, required=False, allow_blank=True, default="")
    properties_range = serializers.ChoiceField(
        choices=PROPERTIES_RANGE_CHOICES, required=False, allow_blank=True, default=""
    )
    marketing_consent = serializers.BooleanField(required=False, default=False)

    # Honeypot — must be empty. Bots fill visible-named fields; this one is CSS-hidden.
    company_website = serializers.CharField(required=False, allow_blank=True, default="")

    def validate_email(self, value: str) -> str:
        domain = value.split("@")[-1].lower()
        if domain in _BLOCKED_DOMAINS:
            # Raise so the view returns 200 via the is_competitor path — caller checks.
            raise serializers.ValidationError("__competitor__")
        return value.lower()

    def validate(self, data: dict) -> dict:
        if data.get("company_website"):
            raise serializers.ValidationError("__honeypot__")
        data.pop("company_website", None)
        return data
