var SandwichMaker = function(objToAugment) {

	// private price variables
	var veggiePrices = {
		"lettuce": 0.80,
		"tomato": 0.75,
		"pickle": 0.99
	};

	// add new veggie price method
	objToAugment.addVeggie = function(selectedVeggie) {
		return veggiePrices[selectedVeggie];
	};

	// return augmented SandwichMaker object
	return objToAugment;
}(SandwichMaker || {});