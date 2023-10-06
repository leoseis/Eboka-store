from django.shortcuts import render, get_object_or_404, redirect

from item.models import Item 

from. models import Conversation
from.forms import ConversetionMessageForm

def new_conversation(request, Item_pk):
    Item = get_object_or_404(Item, Item_pk)


    if Item .created_by == request.user:
      return redirect('dashboard:index')

    conversations = Conversation.objects.filter(item=item).filter(members__in=[request.user.id])

    if conversations:
      pass # redirect to conversation 

    if request.method== 'POST':
     form = ConversetionMessageForm(request.POST) 

     if form.is_valid():
       conversation = Conversation.objects.create(item=item)
       conversation.members.add(request.user)
       conversation.members.add(Item.created_by)
       conversation.save()
        
       conversation_message = form.save(commit=False)
       conversation_message.conversation = conversation
       conversation_message.created_by = request.user
       conversation_message.save()

       return redirect('item:detail', pk=item_pk)
     
     else:
       form = ConversetionMessageForm()  
    return render(request, 'conversation/new.html',{
          'form': form
        })
 








