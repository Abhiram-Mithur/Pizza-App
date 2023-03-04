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

// Add a "dragover" event listener to the pizza circle element
pizzaCircle.addEventListener('dragover', event => {
  // Prevent default behavior to allow dropping
  event.preventDefault();
});

// Add a "drop" event listener to the pizza circle element
pizzaCircle.addEventListener('drop', event => {
  // Prevent default behavior to avoid opening the dropped element as a URL
  event.preventDefault();

  // Get the dropped element ID
  const elementId = event.dataTransfer.getData('text');

  // Get the dropped element
  const element = document.querySelector(`#${elementId}`);

  // If the dropped element is a base and there's already a base on the pizza, remove it
  if (element.classList.contains('base') && pizzaCircle.querySelector('.base')) {
    pizzaCircle.removeChild(pizzaCircle.querySelector('.base'));
  }

  // If the dropped element is a topping and there are already 3 toppings on the pizza, don't do anything
  if (element.classList.contains('topping') && pizzaCircle.querySelectorAll('.topping').length >= 3) {
    return;
  }

  // If the dropped element is a base, add it to the pizza circle as the first child
  if (element.classList.contains('base')) {
    pizzaCircle.insertBefore(element, pizzaCircle.firstChild);
  } else {
    // If the dropped element is a topping, add it to the pizza circle as the last child
    pizzaCircle.appendChild(element);
  }
});

const submitBtn = document.getElementById('submit-btn');
const result = document.getElementById('result');

submitBtn.addEventListener('click', () => {
  const elements = pizzaCircle.children;
  let elementsList = '';

  for (let i = 0; i < elements.length; i++) {
    elementsList += elements[i].getAttribute('data-name') + '<br>';
  }

  result.innerHTML ="you have choosen:"+'<br>'+ elementsList+"pizza";
});

