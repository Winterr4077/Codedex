Let's practice displaying and changing HTML content by working with [a well-known meme involving Drake](https://en.meming.world/wiki/Drakeposting).

In the image below, Drake doesn't look too happy:
<img width="1037" height="791" alt="image" src="https://github.com/user-attachments/assets/e8e8f3f2-67d7-4132-9993-577b8c85719e" />

Drake meme before the completed exercise

Let's use the power of DOM methods and properties to turn his frown upside down!

First, create the following files:

- index.html
- styles.css
- script.js
  
Let's start with some HTML:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <link href="styles.css" rel="stylesheet" />
  <title>Hotline Bling</title>
</head>
<body>
  <div id="wrapper">
    <div>
      <img width="450" id="drake-pic-1" src="https://i.imgur.com/1YQsiOq.png" />
      <h1 id="heading-1">Watch and Learn</h1>
    </div>
    <div>
      <img width="450" id="drake-pic-2" src="https://i.imgur.com/1YQsiOq.png" />
      <h1 id="heading-2">Watch and Learn</h1>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
```
Next, copy and paste the following CSS:
```
body {
  background-color: #d7ba19;
}

#wrapper {
  width: 75%;
  margin: auto;
}

div {
  width: 75%;
  margin: auto;
}

h1 {
  display: inline;
  position: relative;
  bottom: 4em;
}
```
Inside a script.js file, let's do the following:

- Create a ``drakePicTwo`` variable that selects the ``<img>`` element with the ``id`` of ``"drake-pic-2"``.
- Create another variable called heading that selects the ``<h1>`` heading element with an ``id`` of ``"heading-2"``.
- Change the image source of the ``drakePicTwo`` variable to this link: ``"https://i.imgur.com/RGbh6zY.png"``.
- Change the text of the ``heading`` variable to say ``"Learn By Doing"``.
  
After you save your changes, you should notice the HTML has re-rendered to reflect your changes! It should look like this:
<img width="939" height="832" alt="image" src="https://github.com/user-attachments/assets/58ac69c4-0fc7-41a0-bc5b-f3e01a6b0faf" />

Drake meme after the completed exercise

Bonus: If you want an extra challenge, replace both captions with something cool and witty.

