# Write code below 💖

number = int(input('Please enter a number you would like to be squared: '))
total = 0

for i in range(1, number + 1):  
    square = i ** 2
    total = total + square

print(total)
