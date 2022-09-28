# 1. Countdown - Create a function that accepts a number as an input. Return a new list that counts down by one, from the number (as the 0th element) down to 0 (as the last element).
def countdown(number):
    count = []
    for i in range(number, -1, -1):
        count.append(i)
    return count
# Example: countdown(5) should return [5,4,3,2,1,0]
print(countdown(5))


# 2. Print and Return - Create a function that will receive a list with two numbers. Print the first value and return the second.
def print_and_return(num1,num2):
    print(num1)
    return(num2)
# Example: print_and_return([1,2]) should print 1 and return 2
print(print_and_return(1,2))


# 3. First Plus Length - Create a function that accepts a list and returns the sum of the first value in the list plus the list's length.
def first_plus_length(list):
    return list[0] + len(list)
# Example: first_plus_length([1,2,3,4,5]) should return 6 (first value: 1 + length: 5)
print(first_plus_length([1, 2, 3, 4, 5]))


# 4. Values Greater than Second - Write a function that accepts a list and creates a new list containing only the values from the original list that are greater than its 2nd value. Print how many values this is and then return the new list. If the list has less than 2 elements, have the function return False
def values_greater_than_second(list):
    if len(list) < 2:
        return False
    count = 0
    count_list = []
    for i in range(len(list)):
        if list[i] > list[1]:
            count = count + 1
            count_list.append(list[i])
    print(count)
    return(count_list)
# Example: values_greater_than_second([5,2,3,2,1,4]) should print 3 and return [5,3,4]
print(values_greater_than_second([5,2,3,2,1,4]))
# Example: values_greater_than_second([3]) should return False
print(values_greater_than_second([3]))


# 5. This Length, That Value - Write a function that accepts two integers as parameters: size and value. The function should create and return a list whose length is equal to the given size, and whose values are all the given value.
def length_and_value(size, value):
    lv_list = []
    for i in range(size):
        lv_list.append(value)
    return lv_list
# Example: length_and_value(4,7) should return [7,7,7,7]
print(length_and_value(4,7))
# Example: length_and_value(6,2) should return [2,2,2,2,2,2]
print(length_and_value(6,2))
