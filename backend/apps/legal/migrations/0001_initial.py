import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='LegalConsentLog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('document_type', models.CharField(
                    choices=[
                        ('privacy_policy', 'Privacy Policy'),
                        ('user_terms', 'User Terms of Service'),
                        ('cookie_policy', 'Cookie Policy'),
                    ],
                    max_length=50,
                )),
                ('version', models.CharField(max_length=20)),
                ('ip_address', models.GenericIPAddressField(blank=True, null=True)),
                ('user_agent', models.TextField(blank=True)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(
                    on_delete=django.db.models.deletion.PROTECT,
                    related_name='legal_consents',
                    to=settings.AUTH_USER_MODEL,
                )),
            ],
            options={
                'ordering': ['-timestamp'],
            },
        ),
        migrations.AddConstraint(
            model_name='legalconsentlog',
            constraint=models.UniqueConstraint(
                fields=['user', 'document_type', 'version'],
                name='unique_user_document_version_consent',
            ),
        ),
    ]
