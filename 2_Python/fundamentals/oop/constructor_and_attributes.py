class User:		
    def __init__(self):
        self.first_name = "Ada"
        self.last_name = "Lovelace"
        self.age = 42

user_ada = User()
print(user_ada.first_name)

# Create another user called user_2!
user2 = User()

# Print user_ada's last name.
print(user_ada.last_name)

# Print user_2's last name. (Yes, they should be the same)
print(user2.last_name)

# Run the code, pause, go back and step through one line at a time
# What do you notice about the order it runs in?
# Write down any other questions you have.

# Sensei Exercise: try just printing the variable, user_ada.
print(user_ada)
#   What prints to the terminal?

