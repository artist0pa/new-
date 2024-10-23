#You are building an e-commerce application, and the system needs to support multiple payment methods. 
# Customers can choose to pay using different payment gateways like Credit Card, PayPal, or Google Pay. 
# You don’t want to hard-code the payment gateway logic, so you decide to use the Factory Method Pattern 
# to dynamically select and process the payment through the appropriate gateway.

from abc import ABC, abstractmethod

class Gateway:
    @abstractmethod
    def pay(self ,payment):
        pass 

class Googlepay(Gateway):
    def pay(self):
        print('payment going throgh Google pay logic will be implimented here')
class CreditCard(Gateway):
    def pay(self):
        print('payment going throgh Credit card logic will be implimented here')

class Paypal(Gateway):
    def pay(self):
        print('payment going throgh Paypal logic will be implimented here')

class PhonPay(Gateway):
    def pay(self):
        print('payment going throgh Phon pay logic will be implimented here')


class Factoryclass:
    @staticmethod 
    def getpaymethod ( typpay)->Gateway:
            if typpay=='googlepay':
                return Googlepay()
            elif typpay == 'creditcart':
                return CreditCard()
            elif typpay == 'paypal':
                return Paypal()
            elif typpay == 'phonpay':
                return PhonPay()
            else : 
                return TypeError('please choose the payment gateway mentioned above  ')
            
typeofgate=input(f"choose the payment method googlepay/creditcart/paypal/phonpay").lower()

gate = Factoryclass.getpaymethod(typeofgate)
gate.pay()



