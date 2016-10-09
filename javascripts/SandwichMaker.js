var SandwichMaker = (function() {

	// Private variable to store the price
	var totalPrice = 0;

	// Return the public interface that other code can interact with
	return {
		addTopping: function(addFunc, changeEvent) {
			//which topping was selected?
			var selectedTopping = changeEvent.target.value;

			// retrieve toppingPrice?
			var toppingPrice = SandwichMaker[addFunc](selectedTopping);

			// is variable (un)checked?
			toppingChecked = changeEvent.target.checked;

			// negate price if event was unchecking
			if (!toppingChecked) {
				toppingPrice = -toppingPrice;
			}
			
			// add price to total
			totalPrice += toppingPrice;

			return totalPrice;
		}
	};
})(SandwichMaker || {});
