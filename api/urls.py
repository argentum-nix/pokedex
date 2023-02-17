from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from .views import (
    FetchPkmnList,
    GetGrassPkmn,
    GetFilteredFlyingPkm,
    GetInvertedPkmn,
    GetFilteredWeightPkm,
)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", TemplateView.as_view(template_name="index.html")),
    path("all", FetchPkmnList.as_view()),
    path("grass", GetGrassPkmn.as_view()),
    path("weight", GetFilteredWeightPkm.as_view()),
    path("flying", GetFilteredFlyingPkm.as_view()),
    path("inverted", GetInvertedPkmn.as_view()),
]
