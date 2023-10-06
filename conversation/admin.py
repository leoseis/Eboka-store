from django.contrib import admin

from .models import Conversation, ConversetionMessage

admin.site.register(Conversation)
admin.site.register(ConversetionMessage)