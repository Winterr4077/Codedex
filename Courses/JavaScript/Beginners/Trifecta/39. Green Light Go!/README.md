In the following exercises, we're going to explore a lot about how we can use JavaScript to work with HTML elements and CSS styles. For now, though, here's a little demo of the power of all three working together!

Note: For this chapter, use an outside editor (e.g., VS Code) to complete the exercises.

First, create the following files under the same folder:

- index.html
- styles.css
- script.js

Copy and paste the following into an index.html file:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Green Light Go!</title>
  <link href="styles.css" rel="stylesheet" />
  <script src="script.js"></script>
</head>
<body onClick="changeLight()">
  <h1>Click Anywhere!</h1>
  <div id="traffic-light-div">
    <div id="red" class="light"></div>
    <div id="yellow" class="light"></div>
    <div id="green" class="light"></div>
  </div>
</body>
</html>
```
Next, add the following to a styles.css file:
```
#traffic-light-div {
  border: 7px solid;
  width: 150px;
  height: 400px;
  background-color: grey;
}

.light {
  border: 3px solid;
  width: 100px;
  height: 100px;
  margin: 20px auto;
  border-radius: 50%;
}
```
Finally, add the following JavaScript code to a script.js file:
```
let lightIndex = 0;

function changeLight() {
  const redLight = document.getElementById("red");
  const yellowLight = document.getElementById("yellow");
  const greenLight = document.getElementById("green");

  if (lightIndex === 0) {
    redLight.style.backgroundColor = "#ff0000";
    yellowLight.style.backgroundColor = "";
    greenLight.style.backgroundColor = "";
  } else if (lightIndex === 1) {
    yellowLight.style.backgroundColor = "#ffff00";
    redLight.style.backgroundColor = "";
    greenLight.style.backgroundColor = "";
  } else {
    greenLight.style.backgroundColor = "#00ff00";
    redLight.style.backgroundColor = "";
    yellowLight.style.backgroundColor = "";
  }

  lightIndex = (lightIndex + 1) % 3;
}
```
Test your code by running the index.html file from your editor.

