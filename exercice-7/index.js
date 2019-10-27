'use strict';

function computeNotes() {

	var tab = [12, 13, 14, 11, 20, 19, 15];
	var i = 0;
	var tot = 0.0;

	while (i < tab.length) {
		tot += tab[i];
		i++;
    }
	return (tot / tab.length);
}

var result = computeNotes();
console.log(result);