// Get the pizza circle element
const pizzaCircle = document.getElementById('pizza-circle');

// Get the base elements
const bases = document.querySelectorAll('.base');

// Loop through each base element
bases.forEach(base => {
  // Add a "dragstart" event listener to each base element
  base.addEventListener('dragstart', event => {
    // Set the data transfer with the base ID
    event.dataTransfer.setData('text/plain', base.id);
  });
});

// Get the toppings elements
const toppings = document.querySelectorAll('.topping');

// Loop through each topping element
toppings.forEach(topping => {
  // Add a "dragstart" event listener to each topping element
  topping.addEventListener('dragstart', event => {
    // Set the data transfer with the topping ID
    event.dataTransfer.setData('text/plain', topping.id);
  });
});
