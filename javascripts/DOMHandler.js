// DOM element where price is sent to display
var totalPriceTarget = document.getElementById("DOMPrice");

// variable to hold final price displayed
var finalSandwichPrice = 0;

// references to ingredient sections
var breadChooser = document.getElementById("breads");
var meatChooser = document.getElementById("meats");
var cheeseChooser = document.getElementById("cheeses");
var condimentChooser = document.getElementById("condiments");
var veggieChooser = document.getElementById("veggies");

// Add the topping to the SandwichMaker to increase the total price
function addToDOM(sentTotalPrice) {
  finalSandwichPrice = sentTotalPrice;
  totalPriceTarget.textContent = finalSandwichPrice.toFixed(2);
}

// Event listeners
breadChooser.addEventListener("change", function(changeEvent) {
  var currentTotalPrice = SandwichMaker.addTopping('addBread', changeEvent);
  addToDOM(currentTotalPrice);
});

meatChooser.addEventListener("change", function(changeEvent) {
  var currentTotalPrice = SandwichMaker.addTopping('addMeat', changeEvent);
  addToDOM(currentTotalPrice);
});

cheeseChooser.addEventListener("change", function(changeEvent) {
  var currentTotalPrice = SandwichMaker.addTopping('addCheese', changeEvent);
  addToDOM(currentTotalPrice);
});

condimentChooser.addEventListener("change", function(changeEvent) {
  var currentTotalPrice = SandwichMaker.addTopping('addCondiment', changeEvent);
  addToDOM(currentTotalPrice);
});

veggieChooser.addEventListener("change", function(changeEvent) {
  var currentTotalPrice = SandwichMaker.addTopping('addVeggie', changeEvent);
  addToDOM(currentTotalPrice);
});