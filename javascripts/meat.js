var SandwichMaker = function(objToAugment) {

	// private price variables
	var meatPrices = {
		"roast beef": 1.49,
		"ham": 1.29,
		"turkey": 1.19
	};

	// add new meat price method
	objToAugment.addMeat = function(selectedMeat) {
		return meatPrices[selectedMeat];
	};

	// return augmented SandwichMaker object
	return objToAugment;
}(SandwichMaker || {});