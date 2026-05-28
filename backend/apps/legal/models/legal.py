from django.db import models
from django.conf import settings

class DocumentType(models.TextChoices):
    PRIVACY_POLICY = 'privacy_policy', 'Privacy Policy'
    USER_TERMS = 'user_terms', 'User Terms of Service'
    COOKIE_POLICY = 'cookie_policy', 'Cookie Policy'

class LegalConsentLog(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, 
        on_delete=models.PROTECT,
        related_name='legal_consents'
    )
    document_type = models.CharField(
        max_length=50,
        choices=DocumentType.choices
    )
    version = models.CharField(max_length=20)
  
    # The Ironclad Proof
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    user_agent = models.TextField(blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)

class Meta:
        ordering = ['-timestamp']
        # You can't have a user agree to the exact same document version twice
        constraints = [
            models.UniqueConstraint(
                fields=['user', 'document_type', 'document_version'],
                name='unique_user_document_version_consent'
            )
        ]

def __str__(self):
    return f"{self.user} -> {self.get_document_type_display()} ({self.document_version})"