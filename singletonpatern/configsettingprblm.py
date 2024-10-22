# Solution: Create a ConfigurationManager class as a singleton that reads settings from a configuration file. Any part of the application can access this instance to get configuration values.




import json

class Config1:
        _intance=None

        def __new__(cls) :
                if cls._intance ==  None:
                        cls._intance=super(Config1,cls).__new__(cls)
                return cls._intance
        def read(self):
             with open('./config_setting.json', 'r') as f : 
                    self.configarsetting=json.load(f)
             print(self.configarsetting)
                 

    
config=Config1()
config.read()
