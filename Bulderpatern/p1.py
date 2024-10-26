# Imagine you’re designing a vacation planning system. Users should be able to customize a vacation package with options like:

# Destination
# Accommodation Type (e.g., Hotel, Resort, Airbnb)
# Number of Days
# Transport Mode (e.g., Flight, Train, Car)
# Meal Plan (e.g., All-inclusive, Breakfast-only, None)
# Activities (e.g., Scuba Diving, Sightseeing, Hiking)

class Vacation:
    def __init__(self,destination,accomondation,numberofdays,transportmode,mealplan,activities):
                    self.destination=destination
                    self.accomondation=accomondation
                    self.numberofdays=numberofdays
                    self.transportmode=transportmode
                    self.mealplan=mealplan
                    self.activities=activities
    def vacationdetails(self):
                    print(f"destination : {self.destination}  accomondation: {self.accomondation}  ztransportmode: { self.transportmode} mealplan : {self.mealplan} activities :{self.activities}")

class  BuilderVacation :
            def __init__(self):
                    self.destination=None
                    self.accomondation=None
                    self.numberofdays=None
                    self.transportmode=None
                    self.mealplan=None
                    self.activities=None
            def set_destination(self , destination):
                    self.destination =destination 
                    return self
            def set_accomondation(self,accomondation):
                    self.accomondation=accomondation
                    return self
            def set_numberofdays(self,numberofdays):
                    self.numberofdays=numberofdays
                    return self

            def set_transportmode(self,transportmode):
                    self.transportmode=transportmode
                    return self

            def set_mealplan(self,mealplan):
                    self.mealplan=mealplan
                    return self
            def set_activities(self,activities):
                    self.activities=activities
                    return self
            
            def build(self):
                    return Vacation(self.destination,self.accomondation,self.numberofdays,self.transportmode,self.mealplan,self.activities)
            
builder=BuilderVacation()

vacation = (
                builder
                .set_destination('Kashmir')
                .set_accomondation('luxury hotel')
                .set_numberofdays(5)
                .set_transportmode('flight')
                .set_mealplan('non-veg')
                .set_activities('bunjee jumping,surfing')
                .build()
           )

print(vacation.vacationdetails())