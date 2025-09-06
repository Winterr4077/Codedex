// Write code below 💖

const characters = [
  "The Wally Watchers",
  "Wilma",
  "Fritz",
  "Wizard Whitebeard",
  "Odlaw",
  "Waldo",
  "Woof"
];

if (characters.includes("Waldo")) {
  const indexNumber = characters.indexOf("Waldo");
  console.log(`Found Waldo at index ${indexNumber}!`);
} else {
  console.log("Not found");
}
