class User:

    # init attributes
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        # default attributes
        self.is_rewards_member = False
        self.gold_card_points = 0
    
    # methods
    def display_info(self):
        print(self.first_name)
        print(self.last_name)
        print(self.email)
        print(self.age)
        print(self.is_rewards_member)
        print(self.gold_card_points)
        return(self)

    def enroll(self):
        if (self.is_rewards_member == True):
            print(f"{self.first_name} is already a member.")
        else:
            self.is_rewards_member = True
        return(self)

    def spend_points(self, amount):
        if (self.gold_card_points < amount):
            print(f"{self.first_name} does not have enough Gold Card Points.")
        else:
            self.gold_card_points -= amount
        return(self)

rick = User("Ricardo", "Sanchez", "rick@gmail.com", 54)
rick.gold_card_points += 500
rick.display_info().enroll().spend_points(50).display_info()

lisa = User("Lisa", "Simpson", "lisa@gmail.com", 13)
lisa.gold_card_points += 500
lisa.enroll().spend_points(80).display_info()

eric = User("Eric", "Cartman", "eric@gmail.com", 16)
eric.spend_points(40).display_info()

