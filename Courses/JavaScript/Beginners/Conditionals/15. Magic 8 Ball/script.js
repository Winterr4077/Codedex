let question = "Is Codédex better than Udemy yet?";
let numbergenerated = Math.floor(Math.random() * 9) + 1;
let answer = "";

if (numbergenerated === 1){
  answer = "Yes - definitely.";
} else if (numbergenerated === 2){
  answer = "It is decidedly so.";
} else if (numbergenerated === 3){
  answer = "Without a doubt.";
} else if (numbergenerated === 4){
  answer = "Reply hazy, try again.";
} else if (numbergenerated === 5){
  answer = "Ask again later.";
} else if (numbergenerated === 6){
  answer = "Better not tell you now.";
} else if (numbergenerated === 7){
  answer = "My sources say no.";
} else if (numbergenerated === 8){
  answer = "Outlook not so good.";
} else {
  answer = "Very doubtful.";
}

console.log("Number Generated: " + numbergenerated);
console.log("Question: " + question);
console.log("Answer: " + answer);
