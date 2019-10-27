'use strict';

function checkPhoneNumber() {

    //get body
    var elBody = document.querySelector('body');

	//write html
	var elH1 = document.createElement('h1');
    elH1.innerHTML = 'CheckPhone Number';
    var elH2 = document.createElement('h2');
	elBody.appendChild(elH1);
    elBody.appendChild(elH2);

    //get the phone number
	var number = prompt('Entrez le numéro de téléphone ici', '');

    console.log(number);
    
    //first rexeg = check for only digits and for lenght = 10
    if (number.match(/[0-9]{10,10}$/) != null) {
        console.log('valid number');
        //second regex = check for 01, 06, or 07 before
        if (number.match(/^0[167]/) != null ){
            elH2.innerHTML = 'The number "'+number+'" is authorized';
            console.log('the number is authorized');
            return true;

        //else the number is valid but not authorized - return false
        } else {
            elH2.innerHTML = 'The number "'+number+'" is not authorized'
            console.log('the number not authorized');
            return false;
        }
    //else the number is invalid - return false
    } else {
        console.log('invalid Number');
        elH2.innerHTML = 'The number "'+number+'" is invalid'
        return false;
    }
}

checkPhoneNumber();