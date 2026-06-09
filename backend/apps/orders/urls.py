from django.urls import path
from apps.orders.views import RecordOrderView

urlpatterns = [
    path("record/", RecordOrderView.as_view(), name="order-record"),
]
