from django.conf.urls import include, url
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.generic import TemplateView
# from .views import home

app_name = "databoks"
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', TemplateView.as_view(template_name='index.html'), name='uHome'),
    url(r'^api/', include('databoks.apps.authentication.urls', namespace='authentication')),
]

urlpatterns += staticfiles_urlpatterns()
