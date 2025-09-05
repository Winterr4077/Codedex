It's time we try out the display property ourselves!

In an index.html file, copy/paste the following HTML code:
```
<header>
  <h1 id="header-title">Rendezvous Tutoring</h1>
  <p id="header-text">Top-notch 1:1 Instructors!</p>
  <nav>
    <ul>
      <li><a href="#story-section">Story</a></li>
      <li><a href="#services-section">Services</a></li>
      <li><a href="#contact-section">Contact</a></li>
    </ul>
  </nav>
</header>
<main>
  <section id="story-section">
    <h2>Our Story</h2>
    <p>For over 15 years, we have provided an impactful, results-focused tutoring experience to all of our pupils!</p>
    <p>
      It all started as homework-help between two friends at the library. One friend needed the other's help with algebra and how they could apply it in everyday life.
    </p>
    <img id="story-image" src="https://cdn.pixabay.com/photo/2022/11/21/09/43/success-7606515_1280.jpg" alt="" />
  </section>
  <section id="services-section">
    <h2>Services</h2>
    <p>We offer a multitude of tutoring services across many platforms, including:</p>
    <ul>
      <li>One-on-one tutoring sessions with seasoned industry professionals.</li>
      <li>A vast tutoring network covering over 10 industries and over 50 skills, trades, and disciplines.</li>
      <li>Chapter meetups for "lightning round-ezvous" events across 25 U.S. cities!</li>
    </ul>
  </section>
  <footer id="contact-section">
    <h2>Contact</h2>
    <p>Interested in upskilling with Rendezvous Tutoring? Feel free to sign-up with your e-mail below to learn more!</p>
    <form>
      <input type="email" placeholder="e-mail here" required />
      <input type="submit" value="Sign Up" />
    </form>
  </footer>
</main>
```
Next, copy/paste the following starter CSS in a styles.css file:
```
* {
  font-family: Lato, sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

header {
  background-color: #492b7c;
  color: #fff;
  border-bottom: 2px solid #313131;
}

header,
h2 {
  text-align: center;
}

nav > ul {
  margin: 5px 0;
}

nav li {
  background-color: #c2c2ff;
  padding: 7px;
  margin: 1em auto;
  width: 25%;
  border: 2px solid;
  border-radius: 5px;
  list-style-type: none;
}

section {
  min-height: 100vh;
}

footer > p {
  width: 80%;
  margin: auto;
}

section > h2 {
  border-bottom: 0.5px solid grey;
}

#story-section {
  background-color: #fffbc4;
}

#story-section > h2 {
  background-color: #c2ffff;
}

#story-image {
  max-width: 100%;
  max-height: 250px;
  border-radius: 5px;
}

#services-section > h2 {
  background-color: #88b3b3;
}

#services-section > ul {
  list-style-position: inside;
}

#contact-section {
  background-color: #492b7c;
  color: #fff;
}

form {
  width: max-content;
  margin: auto;
}
```
Select the “Run” button to make sure this content renders correctly.

Now, let's do the following in the styles.css file:

1. Set the ``display`` of the list items in the nav menu (``nav li``) to ``inline-block``.
2. Set the ``display`` in the #story-image selector to block.
3. Center the ``#story-image`` element by setting the ``margin`` to ``auto``.
Save the files and select the “Run” button to see how these elements display differently.

