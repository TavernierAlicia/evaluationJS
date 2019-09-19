'use strict';

//SET VARIABLES

//fix reduce() bug
var beginning;
var playerOne = 'X';
var playerTwo = 'O';

//set all winning combinaisons
var toWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

//select all cells of our board
var allTd = document.querySelectorAll('td');

//CREATE FUNCTIONS

//create html elements
function writeHtml () {
    var elBody = document.querySelector('body');

    //write h1
    var elH1 = document.createElement('h1');

    //add text h1
    elH1.innerHTML = 'TIC TAC TOE';

    //write css h1
    elH1.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";

    //appenchild h1
    elBody.appendChild(elH1);

    //write table
    var elTable = document.createElement('table');
    
    //write css table
    elTable.style.height = '70px';
    elTable.style.width = '230px';
    elTable.style.borderColor = 'black';
    elTable.style.borderStyle = 'solid';
    elTable.style.borderWidth = '1px';
    
    var count = 0;

    for (var tr = 0; tr <= 2; tr++) {
        
        //write tr
        var elTr = document.createElement('tr');

        for(var td = 0; td <= 2; td++){

            //write td
            var elTd = document.createElement('td');

            //setattribute
            elTd.setAttribute('id', count);

            //write css td
            elTd.style.borderWidth = '1px';
            elTd.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
            elTd.style.borderStyle = 'solid';
            elTd.style.borderColor = 'white';
            elTd.style.backgroundColor = 'black';
            elTd.style.color = 'white';
            elTd.style.height = '70px';
            elTd.style.width = '230px';

            //write onclick

            //appendchild td
            elTr.appendChild(elTd);
            count++;
        }

        //appendchild tr
        elTable.appendChild(elTr);
    }

    //write button
    var elButton = document.createElement('button');

    //add text button 
    elButton.innerHTML = 'RESET';

    //write css button
    elButton.style.backgroundColor = 'black';
    elButton.style.color = 'white';
    elButton.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
    elButton.style.borderColor = 'black';
    elButton.style.borderRadius = '0.3em';
    elButton.style.marginBottom = '20px';
    elButton.style.padding = '7px';
    elButton.style.fontSize = '22px';
    elButton.style.display = 'none';

    //write onclick
    elButton.addEventListener('click', start)

    //appendchild button
    elBody.appendChild(elButton);

    //appendchild Table
    elBody.appendChild(elTable);
}

//initialize the game
function start() {

    //make button disapear
    document.querySelector('button').style.display = 'none';

    //set each actual td in array 
    beginning = Array.from(Array(9).keys());

    //empty all the tds
    for (var i = 0; i < 9; i++) {
        var allTd = document.querySelectorAll('td');
        allTd[i].innerText = '';
        //set function on click
        allTd[i].addEventListener('click', play, false);
    }
}

function play(cell) {
    turn(cell.target.id, playerOne);
    //get button back
}

function turn(cellId, player) {
    beginning = player;
    document.getElementById(cellId).innerText = player;
    let isWin = check(beginning, player);
    if (isWin) {
        endGame(iswin);
    }
}

function check(display, player) {
    let checkwin = display.reduce((a, e, i) => 
    (e === player) ? a.concat(i) : a, []);
    let isWin = null;
    for (let [index, win] of toWin.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            isWin = {index: index, player: player};
            break;
        }
    }
    return isWin;
}

function endGame(won) {
    for(var i = 0; i < ClientRectList.length; i++) {
        allTd[i].removeEventListener('click', play, false)
    }
}

//PROGRAM

writeHtml();
start();



//add popup for the end