var SandwichMaker = function(objToAugment) {

	// private price variables
	var cheesePrices = {
		"cheddar": 0.65,
		"provolone": 0.65,
		"pepper jack": 0.60
	};

	// add new cheese price method
	objToAugment.addCheese = function(selectedCheese) {
		return cheesePrices[selectedCheese];
	};

	// return augmented SandwichMaker object
	return objToAugment;
}(SandwichMaker || {});