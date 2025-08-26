// Write code below 💖

let count = 0;
let targetNumber = Math.floor(Math.random() * 100)

while(count < 10) {
  let drawNumber = Math.floor(Math.random() * 100);
  if (drawNumber === targetNumber){
    count += 1;
    console.log('Match');
  } else {
    console.log('No Match');
  }
}

console.log(`The number ${targetNumber} was found ${count} times.`)
