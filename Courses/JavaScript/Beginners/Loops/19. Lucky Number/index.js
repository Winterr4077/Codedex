// Write code below 💖

const luckyNumber = 7
let guess = Math.floor(Math.random() * 10) + 1;

while (luckyNumber !== guess){
  print("Nope, it isn't " + guess)
  guess = Math.floor(Math.random() * 10) + 1;
}

print("My lucky number is " + luckyNumber + "!")
