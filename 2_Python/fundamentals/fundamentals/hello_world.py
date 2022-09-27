# 1. TASK: print "Hello World"
print("Hello World")
# 2. print "Hello Josh!" with the name in a variable
name = "Josh"
print("Hello", name)	# with a comma
print("Hello " + name)	# with a +
# 3. print "Hello 42!" with the number in a variable
name = 42
print("Hello", name)	# with a comma
print("Hello " + str(name))	# with a +	-- this one should give us an error!
# 4. print "I love to eat sushi and pizza." with the foods in variables
fave_food1 = "mexican food"
fave_food2 = "ramen"
print("I love to eat {} and {}.".format("mexican food", "ramen")) # with .format()
print(f"I love to eat {fave_food1} and {fave_food2}.") # with an f string
