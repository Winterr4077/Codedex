It's time to put everything together and make some memes!

[Internet memes](https://en.wikipedia.org/wiki/Internet_meme) are a fun way to express thoughts, feelings, and ideas with an image and a few words.

Let's start with the HTML:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <link href="styles.css" rel="stylesheet" />
  <title>Cap That</title>
</head>
<body>
  <h1>Welcome to the Meme Machine</h1>
  <button id="generator-button">Generate Meme</button>
  <div id="meme-wrapper">
    <img width="600" id="random-meme" src="" />
    <h2 id="random-caption"></h2>
  </div>
  <script src="script.js"></script>
</body>
</html>
```
Then, let's add the following CSS:
```
body {
  text-align: center;
}

#generator-button {
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
  font-weight: bolder;
  font-size: xx-large;
}

#meme-wrapper {
  border: 4px solid black;
  width: 700px;
  height: 500px;
  padding: 5px;
  margin: 15px auto;
}

#random-meme {
  border-radius: 5px;
}

#random-caption {
  margin: 0;
}
```
In a script.js file, copy and paste the following array:
```
const memeArray = [
  "https://i.imgur.com/bSi4xLb.png",
  "https://i.imgur.com/6y0G7N0.png",
  "https://i.imgur.com/LXnRao1.png",
  "https://i.imgur.com/Qqoxh1N.png"
];
```
Note: Feel free to add more images if you want!

Then, create a ``captionsArray`` with as many strings of witty captions as your heart desires!

Next, here's what you need to do via DOM methods and properties:
1. Select the ``<img>`` image element with an ``id`` of ``"random-meme"`` and store it in a variable.
2. Select the ``<h2>`` heading element with an ``id`` of ``"random-caption"`` and store that in a variable.
3. Select the ``<button>`` element with an ``id`` of ``"generator-button"`` and store it in a variable.

Next, add a ``"click"`` event listener to the selected ``"generator-button"`` element and do the following inside the function:

- Generate 2 random index numbers between 0 and the length of either the ``memeArray`` or the ``captionArray``.
- Use one of the random numbers to change the ``.src`` property of the selected ``"random-meme"`` image element to one of the images in the ``memeArray``.
- Use one of the random numbers to change the ``.innerText`` property of the selected ``"random-caption"`` heading element to one of the strings in the ``captionArray``.
  
Go ahead and save the file and try out the meme machine! A random image and caption should appear after you click the button.

