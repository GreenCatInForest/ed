import uuid
from django.db import models


class Lead(models.Model):
    ROLE_CHOICES = [
        ("private-landlord", "Private landlord"),
        ("housing-association", "Housing association / council"),
        ("surveyor", "Surveyor / consultant"),
        ("letting-agent", "Letting agent"),
        ("other", "Other"),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    # Form fields
    guide_name = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    email = models.EmailField()
    organisation = models.CharField(max_length=255, blank=True)
    role = models.CharField(max_length=50, choices=ROLE_CHOICES, blank=True)
    properties_range = models.CharField(max_length=50, blank=True)
    marketing_consent = models.BooleanField(default=False)

    # Request metadata
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    user_agent = models.TextField(blank=True)
    source_url = models.URLField(max_length=500, blank=True)

    # Download delivery
    download_token = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    token_expires_at = models.DateTimeField()
    email_sent_at = models.DateTimeField(null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        app_label = "leads"
        ordering = ["-created_at"]
        indexes = [
            models.Index(fields=["email"]),
            models.Index(fields=["download_token"]),
            models.Index(fields=["created_at"]),
        ]

    def __str__(self):
        return f"{self.name} <{self.email}> — {self.guide_name}"
