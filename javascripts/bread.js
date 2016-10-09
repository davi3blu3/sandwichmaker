var SandwichMaker = function(objToAugment) {

	// private price variables
	var breadPrices = {
		"white": 0.85,
		"wheat": 0.95,
		"rye": 1.05
	};

	// add new bread price method
	objToAugment.addBread = function(selectedBread) {
		return breadPrices[selectedBread];
	};

	// return augmented SandwichMaker object
	return objToAugment;
}(SandwichMaker || {});