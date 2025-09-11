In the next exercise, we will dive further into how we create and then use functions. But for now, let's demonstrate a function by copying and pasting the following in our editor:
```
function greetings() {
  const randomNumber = Math.floor(Math.random() * 4) + 1;

  if (randomNumber == 1) {
    console.log("Howdy!");
  } else if (randomNumber == 2) {
    console.log("Hi there!");
  } else if (randomNumber == 3) {
    console.log("Hey what's happening?");
  } else if (randomNumber == 4) {
    console.log("Hola!");
  } else {
    console.log("Heya!");
  }
}

greetings();
greetings();
greetings();
```
Go ahead and run this code. Based on the value of ``randomNumber``, you should see a different kind of greeting!

