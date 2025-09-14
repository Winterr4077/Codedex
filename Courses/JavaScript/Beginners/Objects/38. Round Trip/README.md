Is there a place you've always wanted to fly to? 🌎

Let's use what we learned to build two objects for [boarding passes](https://en.wikipedia.org/wiki/Boarding_pass) for a round trip:

- 🛫 ``departTripTicket``
- 🛬 ``returnTripTicket``
Both objects should have the following properties:

- ``.name`` for the passenger.
- ``.from`` for where the passenger is flying from.
- ``.to`` for where the passenger is flying to.
- ``.businessClass`` boolean value for whether it's in business class (``true``/``false`` ).
- ``.upgrade()`` method changes the ``.businessClass`` property to ``true`` or prints a message if ``false`` (e.g., ``"Your ticket is already business class!"``).
After creating these objects, use the ``.upgrade()`` method on at least one of them and then log both objects to the console.

Bonus: Want an extra challenge? Add a ``.leaveTime`` and ``.arriveTime`` property to both objects (integers 1-24). Then, define a ``.flightTime()`` method property that calculates and prints the travel time with the ``.leaveTime`` and ``.arriveTime`` properties!

