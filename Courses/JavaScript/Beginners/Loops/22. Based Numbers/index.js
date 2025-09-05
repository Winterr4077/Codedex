// Write code below 💖

let myNumber = 2 
let binary = "";

while (myNumber > 0){
  let remainder = myNumber % 2;
  binary = remainder + binary;
  myNumber = Math.floor(myNumber / 2)
}

console.log(binary)
