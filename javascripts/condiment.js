var SandwichMaker = function(objToAugment) {

	// private price variables
	var condimentPrices = {
		"ketchup": 0.30,
		"mustard": 0.35,
		"mayo": 0.35
	};

	// add new condiment price method
	objToAugment.addCondiment = function(selectedCondiment) {
		return condimentPrices[selectedCondiment];
	};

	// return augmented SandwichMaker object
	return objToAugment;
}(SandwichMaker || {});