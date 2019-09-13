'use strict';

var player1 = O;
var player2 = X;
var player = O;
var number = 0;

function write () {
    var elTd = document.querySelector('td');
    var cell = this.elTd
    this.eltd.addEventListener('click', addtext(this.eltd) );
    //get table
    //get cell
    //write on click
    //appendchild
    //call switchPlayer()
}
function addText (change) {
    change.textContent = 'O';
    switchPlayer(player);
}

function verify () {
    //declare win patterns
    //compare pattern
    //call count
}

function count () {
    //count points
    //declare points
    //if points >= 3 declare winner
    //else call write

}

function switchPlayer () {
    //get number
    number++;
    //if pair set player = player 2
    //else player 1
    write(number);
}
