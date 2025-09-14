Let's demonstrate the usefulness of objects using two pizzas:
```
// Pizza 1

const pizzaTopping = "Cheese 🧀";
const pizzaType = "Pan";
const pizzaSlices = 8;
const pizzaPrice = 12.99;

// Pizza 2 

const pizza = {
  topping: "Pepperoni 🍕",
  type: "Hand-tossed",
  slices: 12,
  price: 14.99
}

console.log(pizza);
```
In the code above, you'll find that while we could define each piece of data in its own variable, objects make it easier to organize this data into a single collection and store it in a single variable.

If you run this code, it will log the following:
```
{
  topping: 'Pepperoni 🍕', 
  type: 'Hand-tossed', 
  slices: 12, 
  price: 14.99
}
```
