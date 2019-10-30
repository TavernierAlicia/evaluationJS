'use strict';

//function way
function getBar() {
	var elBody = document.querySelector('body');
	var elDiv = document.createElement('div');
	elDiv.style.background = 'blue';
	elDiv.style.height = '30px';
	elBody.appendChild(elDiv);
	var width = 1;
  	var id = setInterval(progress, 100);
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



////////////// CORRECT WAY //////////////


/* 
'use strict';
​
/**
 * DrawBarre
 * @construtor
 * @param {Object} el
 */
/*
var DrawBarre = function DrawBarre(el) {
	this.el = document.querySelector(el);
	this.elSegment = document.createElement('div');
  }
  ​
  /**
   * render
   */
  /*
  DrawBarre.prototype.render = function () {
	this.el.appendChild(this.renderBarre(function() {
	  this.loading();
	}.bind(this)));
  }
  ​
  DrawBarre.prototype.loading = function() {
	setInterval(function() {
	  this.elSegment.style.width = this.elSegment.dataset.progress + '%'; 
	  this.elSegment.dataset.progress = parseInt(this.elSegment.dataset.progress) + 1;
	}.bind(this), 500);
  }
  ​
  DrawBarre.prototype.renderBarre = function (callback) {
	var barre = document.createElement('div');
	
	barre.style.background = 'red';
	barre.style.height = '30px';
	barre.style.width = '100%';
  ​
	this.elSegment.style.background = 'green';
	this.elSegment.style.height = '30px';
	this.elSegment.style.width = '0%';
	this.elSegment.setAttribute('data-progress', '0');
  ​
  ​
  ​
	barre.appendChild(this.elSegment);
  ​
	callback();
  ​
	return barre;
  }
  ​
  var drawBarre = new DrawBarre('.toto');
  ​
  drawBarre.render();
  */