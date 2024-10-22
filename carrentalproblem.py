
## implimant a car rental system using oops concept


class Car:
    def __init__(self , make, model , year ,licenceplate,rental_rate):
            self.make = make 
            self.model =model 
            self.year=year 
            self.licenceplate=licenceplate
            self.rental_rate= rental_rate

    def cardetails (self):
            return (f"{self.make} {self.model} {self.year} {self.licenceplate}{self.rental_rate}")

class Luxurycar(Car):
       def __init__(self, make, model , year ,licenceplate,rental_rate ):
        super().__init__(make, model , year ,licenceplate,rental_rate=100 )

class Economy(Car):
        def __init__(self, make, model , year ,licenceplate,rental_rate ):
         super().__init__( make, model , year ,licenceplate,rental_rate=200 )

class Custommer : 
        def __init__ (self,name ,license_number):
             self.name= name 
             self.license_number=license_number
class Rental: 
        def __init__(self , customer, typ_car, rentaldays  ):
            self.customer=customer
            self.rentaldays=rentaldays
            self.typ_car=typ_car
        def calculatetotalrate(self):
            return self.rentaldays*typ_car.rental_rate


customer=Custommer('azam',786)
typ_car=Economy(2018,'toyota_supra',786,100,200)
rental_rate=Rental(customer,typ_car,20)
amount = rental_rate.calculatetotalrate()
print(amount)

