num1 = 42
# variable declaration, initialize integer

num2 = 2.3
# variable declaration, initialize float

boolean = True
# variable declaration, intiialize bool

string = 'Hello World'
#variable declaration, initialize string

pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives']
# variable declaration, initialize list

person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}
# variable declaration, initialize dictionary

fruit = ('blueberry', 'strawberry', 'banana')
# variable declaration, initialize tuple

print(type(fruit))
# log statement: tuple

print(pizza_toppings[1])
# log statement, access list value. Returns "Sausage"

pizza_toppings.append('Mushrooms')
# adds new value "Mushrooms" to the end of the list

print(person['name'])
# log statement, access dictionary value. Returns "John"

person['name'] = 'George'
# changes dictionary value of 'name' to "George"

person['eye_color'] = 'blue'
# changes dictionary value of 'eye_color' to "blue"

print(fruit[2])
# log statement, access tuple value. Returns "banana"

if num1 > 45: # conditional if statement, checks int 'num1' 
    print("It's greater") # log statement, returns string
else: # conditional else statement
    print("It's lower") # log statement, returns string
# expect "It's lower" to be returned

if len(string) < 5: # conditional if statement, checks length of variable 'string' as int
    print("It's a short word!") # log statement, returns string
elif len(string) > 15: # conditional else-if statement, checks length of variable 'string' as int
    print("It's a long word!") # log statement, returns string
else: # conditional else statement
    print("Just right!") # log statement, returns string
# expect "Just right!" to be returned

for x in range(5):
    print(x)
for x in range(2,5):
    print(x)
for x in range(2,10,3):
    print(x)
x = 0
while(x < 5):
    print(x)
    x += 1

pizza_toppings.pop()
pizza_toppings.pop(1)

print(person)
person.pop('eye_color')
print(person)

for topping in pizza_toppings:
    if topping == 'Pepperoni':
        continue
    print('After 1st if statement')
    if topping == 'Olives':
        break

def print_hello_ten_times():
    for num in range(10):
        print('Hello')

print_hello_ten_times()

def print_hello_x_times(x):
    for num in range(x):
        print('Hello')

print_hello_x_times(4)

def print_hello_x_or_ten_times(x = 10):
    for num in range(x):
        print('Hello')

print_hello_x_or_ten_times()
print_hello_x_or_ten_times(4)


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)