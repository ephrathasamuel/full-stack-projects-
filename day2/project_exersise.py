class Account:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance 
    def Deposite(self, amount):
        if amount <= 0:
            print("Error:Amount must be positive")
        else:
         self.balance = self.balance + amount
    
            
    def statement(self):
        print (f"{self.owner} has {self.balance} ETB")
acc = Account("selam", 50)
acc.Deposite(0)
acc.statement()

               
                       
