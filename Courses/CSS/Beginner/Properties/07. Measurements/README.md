Let's try resizing with CSS!

Inside an index.html file, add the following markup:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <link href="styles.css" rel="stylesheet" />
  <title>Measurements</title> 
</head>
<body>
  <h2>Absolute Units</h2>
  <img id="absolute" src="https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157930_960_720.png" alt="Soccer Ball" />
  <h2>Relative Units</h2>
  <img id="relative" src="https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157930_960_720.png" alt="Soccer Ball" />
</body>
</html>
```
Click "Run", and see the current dimensions of the soccer ball images. These images that we're using are both 720px-wide and 720px-tall, by default.

Inside the style.css file, select the first image by its id (#absolute) and set its width to 100px.

Next, select the other image by its id (#relative) and set its width to 50%.

Save the file and click "Run". Try resizing the window and observe how both images behave as a result!

