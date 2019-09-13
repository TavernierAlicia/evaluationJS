'use strict';

function getBar() {
	var elBody = document.querySelector('body');
	var elDiv = document.createElement('div');
	elDiv.style.background = 'blue';
	elDiv.style.height = '30px';
	elBody.appendChild(elDiv);
	var width = 1;
  	var id = setInterval(progress, 10);
	var elem = document.querySelector('div');
	function progress() {
		if (width >= 100) {
			clearInterval(id);

		} else {
			width++;
			elem.style.width = width + '%';
		}
	}	
}
getBar();

