from django.db import models
from django.contrib.auth.models import User
from item.models import Item

class Conversation(models.Model):
    Item = models.ForeignKey(Item, related_name='conversation', on_delete=models.CASCADE)
    members =  models.ManyToManyField(User, related_name='conversations')
    creeated_at =  models.DateTimeField(auto_now_add=True)
    modifieid_at = models.DateTimeField(auto_now=True)


class Meta:
    ordering = ('-modified_at',)


class ConversetionMessage(models.Model):
    conversation = models.ForeignKey(Conversation, related_name= 'messages', on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    created_by =models.ForeignKey(User, related_name='created_messages', on_delete=models.CASCADE)