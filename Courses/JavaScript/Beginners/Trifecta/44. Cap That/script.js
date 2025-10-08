// Write code below 💖

const memeArray = [
  "https://i.imgur.com/bSi4xLb.png",
  "https://i.imgur.com/6y0G7N0.png",
  "https://i.imgur.com/LXnRao1.png",
  "https://i.imgur.com/Qqoxh1N.png"
];

const captionsArray = [
  "This is the one of the four captions.",
  "This is the two of the four captions.",
  "This is the three of the four captions.",
  "This is the four of the four captions."
];

const memeImage = document.getElementById("random-meme");
const memeCaption = document.getElementById("random-caption");
const generatorButton = document.getElementById("generator-button");

generatorButton.addEventListener("click", function () {

const randomMemeIndex = Math.floor(Math.random() * memeArray.length);
const randomCaptionIndex = Math.floor(Math.random() * captionsArray.length);

memeImage.src = memeArray[randomMemeIndex];
memeCaption.innerText = captionsArray[randomCaptionIndex];
});
