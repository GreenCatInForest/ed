from django.urls import path
from apps.leads.views import LeadDownloadRequestView, DocumentDownloadView

urlpatterns = [
    path("download-request/", LeadDownloadRequestView.as_view(), name="lead-download-request"),
    path("downloads/<str:token>/", DocumentDownloadView.as_view(), name="lead-document-download"),
]
