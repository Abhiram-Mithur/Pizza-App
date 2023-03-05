// Get the pizza circle element
const pizzaCircle = document.getElementById('pizza-circle');

// Get the base elements
const bases = document.querySelectorAll('.base');

// Loop through each base element
bases.forEach(base => {
  //  "dragstart" event
  base.addEventListener('dragstart', event => {
    // Set the data 
    event.dataTransfer.setData('text/plain', base.id);
  });
});

// Get the toppings elements
const toppings = document.querySelectorAll('.topping');

// Loop through each topping element
toppings.forEach(topping => {
  // "dragstart"
  topping.addEventListener('dragstart', event => {
    // Set the data 
    event.dataTransfer.setData('text/plain', topping.id);
  });
});

//"dragover" event 
pizzaCircle.addEventListener('dragover', event => {
  // Prevent default behavior to allow dropping
  event.preventDefault();
});

// "drop" event
pizzaCircle.addEventListener('drop', event => {
  // Prevent default behavior to avoid opening the dropped element as a URL
  event.preventDefault();

  // Get the dropped element ID
  const elementId = event.dataTransfer.getData('text');

  // Get the dropped element
  const element = document.querySelector(`#${elementId}`);

  //Checking if the dropped element is a base, or remove it
  if (element.classList.contains('base') && pizzaCircle.querySelector('.base')) {
    pizzaCircle.removeChild(pizzaCircle.querySelector('.base'));
  }

  //Check  if the dropped element is a topping and allow maximum amount of toppings available to drag and drop
  if (element.classList.contains('topping') && pizzaCircle.querySelectorAll('.topping').length >= 3) {
    return;
  }

  // If the dropped element is a base, add it to the pizza circle in first position
  if (element.classList.contains('base')) {
    pizzaCircle.insertBefore(element, pizzaCircle.firstChild);
  } else {
    // If the dropped element is a topping, add it to the pizza circle as the last position
    pizzaCircle.appendChild(element);
  }
});
// Submit button to final the selected pizza

const submitBtn = document.getElementById('submit-btn');
const result = document.getElementById('result');

submitBtn.addEventListener('click', () => {
  const elements = pizzaCircle.children;
  let elementsList = '';

  for (let i = 0; i < elements.length; i++) {
    elementsList += elements[i].getAttribute('data-name') + '<br>';
  }
  //Display the result of the choosen pizza

  result.innerHTML = "You have choosen:" + '<br>' + elementsList + "Pizza";
});