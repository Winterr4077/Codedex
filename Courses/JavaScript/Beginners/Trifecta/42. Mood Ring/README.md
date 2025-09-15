[Mood rings](https://en.wikipedia.org/wiki/Mood_ring) were quite fashionable in the 1970s. A special "moon stone" would change color based on the temperature of your finger and the idea is you could tell how you were generally feeling based on that color!

Let's practice changing CSS styles with the ``.style`` property by creating a mood ring!

Start with the following HTML:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="styles.css">
<title>Mood Ring</title>
</head>
<body>
  <div class="mood-ring" id="moodRing">
    <div class="stone" id="stone"></div>
  </div>
  <h1>How Are You Feeling?</h1>
  <script src="script.js"></script>
</body>
</html>
```
Then, add the following CSS:
```
body {
  text-align: center;
}

.mood-ring {
  width: 150px;
  height: 150px;
  margin: 20px auto;
  border: 15px solid #ccc;
  border-radius: 50%;
  position: relative;
}

.stone {
  width: 125px;
  height: 125px;
  background-color: #3498db; /* Default color */
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: background-color 0.5s ease-in-out;
}
```
Inside a script.js file, create a variable that selects the element with the ``id`` of ``"stone"``.

Next, create a ``randomNumber`` variable to use ``Math.floor()`` and ``Math.random()`` to generate a random number between 1 and 9.

Then, use an ``if``/``else if``/``else`` conditional statement that changes the ``.style.backgroundColor`` property according to the value of ``randomNumber``.

Use the chart below for guidance:
```
Number	Color
1	"red"
2	"orange"
3	"yellow"
4	"green"
5	"blue"
6	"#4169e1"
7	"#00008b"
8	"purple"
9	"black"
```
