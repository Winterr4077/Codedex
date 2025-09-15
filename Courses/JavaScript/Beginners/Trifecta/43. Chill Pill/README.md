Let's use event listeners to make a simple quote generator. These quotes will have a theme about meditation and breathing. 🧘

Add the following to an index.html file:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <link href="styles.css" rel="stylesheet" />
  <title>Chill Pill</title>
</head>
<body>
  <div id="wrapper">
    <h1>Quote Generator</h1>
    <h2>Relax and Take a Chill Pill</h2>
    <div id="quote-div">
      <p id="quote-text"></p>
    </div>
    <button id="quote-button">Generate Quote</button>
  </div>
  <script src="script.js"></script>
</body>
</html>
```
Then, add the following to a styles.css file:
```
#wrapper {
  border: 2px solid black;
  border-radius: 5px;
  width: 50%;
  margin: 25vh auto;
  padding: 10px;
  text-align: center;
  transition: background-color 0.5s ease-in-out;
}

#quote-div {
  border: 1px solid black;
  border-radius: 5px;
  width: 75%;
  margin: 10px auto;
  background-color: #fff;
}
```
For the JavaScript, let's start by copying and pasting the following in the script.js file:
```
const quoteList = [
  "Some doors only open from the inside. Breath is a way of accessing that door.",
  "What has to be taught first, is the breath.",
  "Remember the blue sky. It may at times be obscured by clouds, but it is always there.",
  "In the midst of movement and chaos, keep stillness inside of you.",
  "We can't control the sea, but we can learn how to surf the waves.",
  "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.",
  "To understand the immeasurable, the mind must be extraordinarily quiet, still."
];

const colors = ["#e81416", "#ffa500", "#faeb36", "#79c314", "#487de7", "#4b369d", "#70369d"];
```
Next, use DOM selector methods to create the following variables:

- A ``wrapperDiv`` variable that selects the ``<div>`` element with an ``id`` of ``"wrapper"``.
- A ``quoteText`` variable that selects the ``<p>`` paragraph element with an ``id`` of ``"quote-text"``.
- A ``quoteButton`` variable that selects the ``<button>`` element with an ``id`` of ``"quote-button"``.
  
Now, it's time to add the event!

Use the ``.addEventListener()`` method on the ``quoteButton`` variable. Pass a ``"click"`` string along with a function that does the following:

- Create a ``randomIndex`` from the ``quoteList`` array, using ``Math.floor()`` and ``Math.random()``.
- Use the ``randomIndex`` to get a random quote from the ``quoteList`` array and save to a ``randomQuote`` variable.
- Change the text of the ``quoteText`` variable to the value of the ``randomQuote`` variable.
- Use the ``randomIndex`` again to change the background color of the ``wrapperDiv`` variable to something from the ``colors`` array.
