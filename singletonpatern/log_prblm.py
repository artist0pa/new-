# We'll create a Logger class that will be responsible for logging messages. It will have methods to log messages at different levels (e.g., info, warning, error).

# the ovrall idea  of single ton pattern is one class is have one instance that avaible gloabally 

class Logger:
    _instance=None

    def __new__(cls):
        if  cls._instance==None :
            cls._instance=super(Logger,cls).__new__(cls)
            cls._instance.log_file=open('./log.txt','a')
            return cls._instance
    
    def log(self ,message :str):
        self.log_file.write(message + '\n')
        self.log_file.flush()  # Ensure the message is written to the file
    def close(self):
        self.log_file.close()
        
# log=Logger()
# log.log('hello my name is azam')
# log.close()

log1=Logger()
log1.log('this is working ')
log1.close()