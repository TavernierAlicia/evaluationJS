'use strict';

//SET VARIABLES

//fix reduce() bug
var beginning;
var accurateGames = 0;
var player;
var playerOne = 'X';
var playerTwo = 'O';
var choosePlayer = 0;
var playerOneScore = 0;
var playerTwoScore = 0;

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

    //appendchild Table
    elBody.appendChild(elTable);

    //create div
    var elDiv = document.createElement('div');

    //create score visual
    var gamesH3 = document.createElement('h3');
    gamesH3.setAttribute('id', 'gamesH3');
    gamesH3.innerHTML = 'Number of accurates games : '+accurateGames;
    elDiv.appendChild(gamesH3);

    var pl1H3 = document.createElement('h3');
    pl1H3.setAttribute('id', 'pl1H3');
    pl1H3.innerHTML = 'Player X score : '+playerOneScore;
    elDiv.appendChild(pl1H3);

    var pl2H3 = document.createElement('h3');
    pl2H3.setAttribute('id', 'pl2H3');
    pl2H3.innerHTML = 'Player O score : '+playerTwoScore;
    elDiv.appendChild(pl2H3);

    elBody.appendChild(elDiv);
}

//initialize the game
function start() {

    //set each actual td in array 
    beginning = Array.from(Array(9).keys());

    //empty all the tds
    for (var i = 0; i < 9; i++) {
        //select all tds
        var allTd = document.querySelectorAll('td');
        allTd[i].innerText = '';
        
        //set function on click
        allTd[i].addEventListener('click', play, false)
    }
}

function play(cell) {

    //protect from re-writting
    if (cell.target.innerText != ''){
        return;
    } else {

        //switch player with a count
        var remain = choosePlayer % 2;
        //if the count is a multiple of 2 so remain == 0 
        if (remain == 0) {
            //select playerOne
            player = playerOne;
        } else {
            //else select playerTwo
            player = playerTwo;
        }
        //increment the count
        choosePlayer++
        var cellId = cell.target.id;

        //put value in the td
        document.getElementById(cellId).innerText = player;
        document.getElementById(cellId).style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
        document.getElementById(cellId).style.fontSize = '30px';
        document.getElementById(cellId).style.textAlign = 'center';

        //check if the game is won
        check(beginning, player);

    }
}


function check(display, player) {

    //set iswin to null
    var isWin = null;
    
    //pick the updated allTd
    var allTd = document.querySelectorAll('td');
    
    //convert it to array
    var tdArray = Array.from(allTd);

    //check if someone win the game
    toWin.forEach(function(pattern) {
        var combinaison = '';
        pattern.forEach(function(td) {
            combinaison = combinaison+tdArray[td].innerText;

            if (combinaison.length == 3) {
                //check for combinaisons
                if (combinaison == 'OOO') {
                    isWin = playerTwo;
                    endPart(isWin);
                    
                } else if (combinaison == 'XXX') {
                    isWin = playerOne;
                    endPart(isWin);
                    
                } else {
                    isWin = null;
                    endPart(isWin);
                }  
            } 
        });
    });
    //create empt var
    var empt = 0;

    //check if all tds are full 
    tdArray.forEach(function(element) {
        if (element.innerText == '') {
            empt++
        }
    });
        
    //if less than one empty square
    if (empt == 0) {
        var iswin = 'nobody';
        endPart(iswin)
    }
}

function endPart(won) {
    //match nul
    if (won == 'nobody') {
        if(!alert('Nobody won')){start();}
    //player1 won
    } else if (won == 'X') {
        playerOneScore++;
        accurateGames++;
        if(!alert('Player X won')){start();}
    //player2 won
    }else if (won == 'O'){
        playerTwoScore++;
        accurateGames++;
        if(!alert('Player O won')){start();}

    //won is null
    }else{
        return;
    }
    //show scores
    show(accurateGames, playerOneScore, playerTwoScore);

    //attribute victory
    if (accurateGames == 3) {
        if (playerOneScore < playerTwoScore) {
            var winner = playerTwo;
        } else {
            var winner = playerOne;
        }
        //reload at the gameover
        if(!alert('Player '+winner+' won the game.')){window.location.reload();}

    } 
}

function show(accurateGames, playerOneScore, playerTwoScore) {
    //var gamesH3 = document.querySelector(gamesH3);
    document.getElementById('gamesH3').innerText = 'Number of accurates games : '+accurateGames;

    //var pl1H3 = document.querySelector('pl1H3');
    document.getElementById('pl1H3').innerText = 'Player X score : '+playerOneScore;

    //var pl2H3 = document.querySelector(pl2H3);
    document.getElementById('pl2H3').innerText = 'Player O score : '+playerTwoScore;



}
//PROGRAM
writeHtml();
start();
//show(accurateGames, playerOneScore, playerTwoScore);
