'use strict';

function checkPalindrome() {
	//get body
	var elBody = document.querySelector('body');

	//write form
	var elH1 = document.createElement('h1');
	elH1.innerHTML = 'Détecteur de palindrome';
	elBody.appendChild(elH1);

	var word = prompt('Détecteur de palindrome', 'votre mot ici');

	console.log(word);

	//initialize variables
	var len = 0;
	var i = 0;
	var j  = 0;

	// Calculate the len of the string
	while (word[len] != null) {
		len++;
	}
	
	j = len - 1;
	
	// Check the string from the start and from the end
	while (i < len / 2) {
		if (word[i] != word[j]) {
			console.log('false');
			var elH2 = document.createElement('h2');
			elH2.innerHTML = '"'+word+'" n\' est pas un palindrome';
			elBody.appendChild(elH2);
			return false;
		}
		i++;
		j--;
	}
	console.log('true');
	var elH2 = document.createElement('h2');
	elH2.innerHTML = '"'+word+'" est un palindrome';
	elBody.appendChild(elH2);
	return true;
}
checkPalindrome();

