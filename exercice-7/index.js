'use strict';

function computeNotes() {

	//define rates
	var tab = [12, 13, 14, 11, 20, 19, 15];
	var i = 0;
	var tot = 0.0;

	//walking in the array and sum all values
	while (i < tab.length) {
		tot += tab[i];
		i++;
	}
	//divide sum by number of rate
	return (tot / tab.length);
}
//launch
var result = computeNotes();
console.log(result);