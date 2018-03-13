from django.conf.urls import include, url
from django.contrib import admin
app_name = "databoks"
urlpatterns = [
    url(r'^admin/', admin.site.urls),

    url(r'^api/', include('databoks.apps.authentication.urls', namespace='authentication')),
]
