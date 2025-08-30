# Write code below 💖

earth = float(input('Q1. What is your Earth weight? \nAnswer: '))
planet = int(input('Q2. Give me a planet number from the below. \n1. Mercury\n 2. Venus\n3. Mars\n 4. Jupiter\n5. Saturn\n6. Uranus\n7. Neptune\nAnswer: '))

if planet == 1:
  destinationWeight = earth * 0.38
elif planet == 2:
  destinationWeight = earth * 0.91
elif planet == 3:
  destinationWeight = earth * 0.38
elif planet == 4:
  destinationWeight = earth * 2.53
elif planet == 5:
  destinationWeight = earth * 1.07
elif planet == 6:
  destinationWeight = earth * 0.89
elif planet == 7:
  destinationWeight = earth * 1.14
else:
  destinationWeight = None
    print('Invalid planet number')

if destinationWeight is not None:
    print(f"Your weight on that planet would be {destinationWeight}")
