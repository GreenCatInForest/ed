from django.urls import path
from apps.leads.views import LeadDownloadRequestView

urlpatterns = [
    path("download-request/", LeadDownloadRequestView.as_view(), name="lead-download-request"),
]
