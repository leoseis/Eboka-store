from django import forms
from .models import ConversetionMessage

class ConversetionMessageForm(forms.ModelForm):
    class Meta:
     model = ConversetionMessage 
     fields = ('content',)
     widgets = {
        'content': forms.Textarea( attrs= {
            'class' :'w- full py-4 px-6 rounded boarder'
        })
    }