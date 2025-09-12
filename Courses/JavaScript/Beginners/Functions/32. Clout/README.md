You are helping your content creator friend with building clout on their various social media channels by analyzing their views from last week.

Here are the viewership numbers, stored as arrays:
```
const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];
```
They need the following statistics from each array:

- The mean, or average number of views.
- The median, or middle value of the sorted array.
  
To calculate the mean and median, create two functions called ``mean()`` and ``median()``. Each function accepts an ``viewsArray`` parameter.

Define a ``totalViews`` variable that is local to the scope of the ``mean()`` function. Use it to calculate the average views.

For the ``median``, you'll need to sort the ``viewsArray`` parameter beforehand. Inside the scope of the ``median()`` array, define two variables called ``sortedStats`` and ``middleIndex``.

Lastly, call these functions on all three arrays and log the results to the Console! The output should look like this:
```
TikTok
Mean: 4625.142857142857
Median: 5222

Instagram
Mean: 3970
Median: 3921

YouTube
Mean: 3698.285714285714
Median: 2789
```
