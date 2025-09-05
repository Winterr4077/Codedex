Let's explore how normal flow works by adding a notification to the code from the last exercise!

Inside the index.html file, let's add the following just after the opening <main> tag:
```
<div id="notification-div">
  <details>
    <summary><strong>New Course Offering!</strong>🎥📓</summary>
    <p>We've got a new 6-week course on video editing where you get to meet one-on-one with an industry professional each week! Join <u>here</u>!</p>
  </details>
</div>
```
Then, select the ``#notification-div`` in the styles.css file and add the following:
```
#notification-div {
  background-color: #ed8a0a;
  color: #313131;
  padding: 5px;
  border: 2px solid darkred;
  border-radius: 5px;
  width: 25%;
}
```
Next, let's render our index.html to see where the block-level ``#notification-div`` is placed on the page.

Note: Click on the arrow to show the content below the ``<summary>`` element.

Before moving forward, try nesting the ``#notification-div`` within other elements to see how the normal flow places it on the page.

