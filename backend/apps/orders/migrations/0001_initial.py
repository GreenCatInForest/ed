import uuid
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
            name="Order",
            fields=[
                ("id", models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ("stripe_session_id", models.CharField(max_length=255, unique=True)),
                ("kit_id", models.CharField(max_length=50)),
                ("kit_name", models.CharField(max_length=255)),
                ("amount", models.PositiveIntegerField()),
                ("currency", models.CharField(default="gbp", max_length=3)),
                ("name", models.CharField(max_length=255)),
                ("email", models.EmailField(max_length=254)),
                ("phone", models.CharField(blank=True, max_length=50)),
                ("organisation", models.CharField(blank=True, max_length=255)),
                ("delivery_address", models.TextField(blank=True)),
                ("property_address", models.TextField(blank=True)),
                ("notes", models.TextField(blank=True)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("user", models.ForeignKey(
                    blank=True,
                    null=True,
                    on_delete=django.db.models.deletion.SET_NULL,
                    related_name="orders",
                    to=settings.AUTH_USER_MODEL,
                )),
            ],
            options={
                "ordering": ["-created_at"],
                "app_label": "orders",
            },
        ),
        migrations.AddIndex(
            model_name="order",
            index=models.Index(fields=["email"], name="orders_order_email_idx"),
        ),
        migrations.AddIndex(
            model_name="order",
            index=models.Index(fields=["stripe_session_id"], name="orders_order_session_idx"),
        ),
    ]
