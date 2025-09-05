For the next few exercises, we're going to practice the box model by building a mini-application that features posts of images and GIFs!

In the index.html file, add the following code:
```
<div id="outside-wrapper">
  <img id="top-img" src="https://images.unsplash.com/photo-1551027654-f7b9f56804c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />

  <ul id="post-list">
    <h2>My Feed</h2>
    <li>
      <div class="post-wrapper">
        <img class="post-img" src="https://www.carnegielibrary.org/wp-content/uploads/2016/02/CLPMain_1080x600.jpg" alt="Carnegie Library of Pittsburgh"/>
        <p>Visited the library! 📚 <b>#libraries</b> <b>#readingisawesome</b></p>
      </div>
    </li>
    <hr />
    <li>
      <div class="post-wrapper">
        <img class="post-img" src="https://media.giphy.com/media/AFHFoEv9fDOn7lIdlD/giphy.gif" alt="GIF of two people fist-bumbing with the caption 'YOU GOT THIS'" />
        <p>Carpe diem! <b>#wordsofencouragement</b> <b>#wordsofwisdom</b></p>
      </div>
    </li>
  </ul>
</div>
```
Next, add the following CSS to the styles.css file:
```
* {
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

/* Select `div` elements with `border` here */

#post-list > li {
  list-style-type: none;
}

li > div {
  text-align: left;
}

#top-img {
  width: 10em;
  height: 10em;
  /* Add `border` here */
  /* Add `border-radius` here */
}

#outside-wrapper {
  width: 90%;
  background-color: rgb(169, 206, 221);
  text-align: center;
}

.post-wrapper {
  text-align: left;
  background-color: #f5f5f5;
  /* Add `border-radius` here */
}

.post-img {
  width: 100%;
  /* Add `border-radius` here */
}
```
Under the comments in styles.css (``/* Like this one */``), add the following:

1. Select all ``div`` elements and assign a ``border`` that is ``2px``-thick, solid, and grey.
2. Then, for the ``#top-img`` style, add a ``border`` that is ``12px``-thick, solid, and green.
3. Next, add a ``border-radius`` of ``50%`` to the ``#top-img style``.
4. Lastly, add a ``border-radius`` of ``5px`` to the selectors for ``.post-wrapper`` and ``.post-img``.
Run styles.css again to view the new changes.

