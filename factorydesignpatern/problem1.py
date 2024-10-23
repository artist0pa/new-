# Let's say you're developing a notification system for an application. The application can send
#  notifications via Email, SMS, or Push notifications. The type of notification is determined at 
# runtime, depending on user preferences. The goal is to implement this system using the Factory Method Pattern.

from abc import ABC, abstractmethod 

class Notification :
        @abstractmethod
        def send (self , message):
                pass
    
class Emailnotification(Notification):
        def send (self , message):
                print (f"the Motification send via EMAIL: {message}")
class SMSnotification (Notification):
        def send(self, message ):
                print (f"the notification sent through SMS: {message}")
class PUSHnotification (Notification):
        def send (self , message  ):
                print (f'the notification sent over the push notification : {message}')

class Factoryclass ():
        @staticmethod
        def getmethodofnotification(notify:str)->Notification:
                if notify =='email':
                 return Emailnotification()
                elif notify =='sms':
                       return SMSnotification()
                elif notify == 'push':
                       return PUSHnotification()
                else :
                       return ('invalid type please check the type')
                
typeofinpute=input(f'select the notification type email/sms/push').lower()

notification=Factoryclass.getmethodofnotification(typeofinpute)
notification.send('hello the notification type is working very well')