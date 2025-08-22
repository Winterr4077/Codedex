# Write code below 💖

import random
number = random.randint(0, 8)

question = input("Question: ")

if number == 0:
    print("Magic 8 Ball: Yes - definitely.")
elif number == 1:
    print("Magic 8 Ball: It is decidedly so.")
elif number == 2:
    print("Magic 8 Ball: Without a doubt.")
elif number == 3:
    print("Magic 8 Ball: Reply hazy, try again.")
elif number == 4:
    print("Magic 8 Ball: Ask again later.")
elif number == 5:
    print("Magic 8 Ball: Better not tell you now.")
elif number == 6:
    print("Magic 8 Ball: My sources say no.")
elif number == 7:
    print("Magic 8 Ball: Outlook not so good.")
else:
    print("Magic 8 Ball: Very doubtful.")
