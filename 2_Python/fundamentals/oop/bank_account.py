class BankAccount:

    # class attributes
    balance = 0
    all_accounts = []

    # instance attributes
    def __init__(self, int_rate, balance): 
        self.int_rate = int_rate
        self.balance = balance

    # instance methods
    def deposit(self, amount):
        self.balance += amount
        return(self)

    def withdraw(self, amount):
        if (self.balance < amount):
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        else:
            self.balance -= amount
        return(self)

    def display_account_info(self):
        print(f"Balance: {self.balance}")
        return(self)

    def yield_interest(self):
        if self.balance > 0:
            self.balance = self.balance * (1 + self.int_rate)
        return(self)

        
user1 = BankAccount(.03, 400)
user2 = BankAccount(.02, 250)


user1.deposit(50).deposit(240).deposit(100).withdraw(60).display_account_info()
user2.deposit(1600).deposit(160).withdraw(400).withdraw(1200).withdraw(60).withdraw(20).display_account_info()