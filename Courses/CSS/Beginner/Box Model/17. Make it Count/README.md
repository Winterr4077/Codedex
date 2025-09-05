For this exercise, we're going to do one more thing to our Codédex bot license - we're going to reset its box model to ``border-box``!

The ``border-box`` model (along with empty ``padding`` and ``margin`` styles) is commonly applied to all elements at the top of a .css file, with the universal ``*`` selector:
```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
Copy and paste this to the top of the styles.css tab, and then select the blue “Run” button to see the difference in how the elements are spaced apart.

You may notice that the posts appear to be left-aligned. This is because the ``padding`` for the ``#post-list`` element was reset with ``border-box``, and the ``padding-right`` property for each item was set to 40px.

Select the ``#post-list`` element and give it a ``padding-left`` style of ``40px`` to match the style for ``padding-right``.

