'use strict';

//set variables
var beginning;

//set all winning combinaisons
var pattern = [
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
    elH1.innerHTML = 'Bataille navalle';

    //write css h1
    elH1.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";

    //appenchild h1
    elBody.appendChild(elH1);

    //write table
    var elTable = document.createElement('table');
    
    //write css table
    elTable.style.height = '300px';
    elTable.style.width = '300px';
    elTable.style.borderColor = 'black';
    elTable.style.borderStyle = 'solid';
    elTable.style.borderWidth = '1px';
    
    var count = 0;

    for (var tr = 0; tr <= 11; tr++) {
        
        //write tr
        var elTr = document.createElement('tr');

        for(var td = 0; td <= 11; td++){

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
            elTd.style.height = '10px';
            elTd.style.width = '10px';

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

    //create boats left
    var gameH3 = document.createElement('h3');
    gameH3.setAttribute('id', 'game');
    gameH3.innerHTML = 'Bateaux restants : ';

    //list of boats
    var elLi1 = document.createElement('li');
    elLi1.setAttribute('id', 'jetski');
    elLi1.innerText = 'Jetski x1';

    var elLi2 = document.createElement('li');
    elLi2.setAttribute('id', 'fregate');
    elLi2.innerText = 'Frégate x1';

    var elLi3 = document.createElement('li');
    elLi3.setAttribute('id', 'petrollier');
    elLi3.innerText = 'Pétrollier x1';

    var elLi4 = document.createElement('li');
    elLi4.setAttribute('id', 'porteavions');
    elLi4.innerText = 'Porte avions x2';

    //display results
    var elPRes = document.createElement('p');
    elPRes.setAttribute('id', 'results')
    elPRes.style.color = 'red';

    //display reset button
    var elButton = document.createElement('button');
    elButton.innerText = 'Rejouer';
    elButton.setAttribute('id', 'restart');
    elButton.setAttribute('onClick', 'window.location.reload();');
    elButton.style.display = 'none';

    //appendchild
    elDiv.appendChild(elButton);
    elDiv.appendChild(gameH3);
    elDiv.appendChild(elLi1);
    elDiv.appendChild(elLi2);
    elDiv.appendChild(elLi3);
    elDiv.appendChild(elLi4);
    elDiv.appendChild(elPRes);
    elBody.appendChild(elDiv);
}

//initialize the game
function start() {

    //set each actual td in array 
    beginning = Array.from(Array(144).keys());

    //empty all the tds
    for (var i = 0; i < 144; i++) {
        //select all tds
        var allTd = document.querySelectorAll('td');
        allTd[i].innerText = '';
        
        //set function on click
        allTd[i].addEventListener('click', play, false)
    }
}

function play(cell) {

    //get cell position
    var cellId = cell.target.id;
    var col = (cellId % 12);
    var li = Math.floor(cellId / 12);

    //affect pattern+position to ship
    var ship = pattern[li][col];

    //put color on the selected cell
    document.getElementById(cellId).style.backgroundColor = 'blue';

    //if there is a boat in ths pos
    if (pattern[li][col] != 0) {
        //make the tile red
        document.getElementById(cellId).style.backgroundColor = 'red';
        //replace value by 0
        pattern[li][col] = 0;

        //if there is no other part of this boat
        if (containsDigit(ship) == false) {
            document.getElementById('results').innerText = 'col '+col+', li '+li+' Coulé!';
            //call removeboat
            removeBoat(ship);
        } else {
            document.getElementById('results').innerText = 'col '+col+', li '+li+' Touché!';
        }

    } else {
        document.getElementById('results').innerText = 'col '+col+', li '+li+' Raté!';
    }

}

//check if boat digit is in the array
function containsDigit(boat) {
    var i = 0;
    var j = 0;
    //walk on pattern tab
    while (i < pattern.length) {
        j = 0;
        //walk on line
        while (j < pattern[i].length) {
            //if the boat number is somewhere, return true
            if (pattern[i][j] == boat) {
                return true;
            }
            j++;
        }
        i++;
    }
    //if no match with boat number, return false
    return false;
}

function removeBoat(ship) {

    var test;
    var multipleboats;

    switch(ship) {
        
        //line through the sinked boat
        case 1 :
            document.getElementById('jetski').style.textDecoration = 'line-through';
            break;
        case 2 :
            document.getElementById('fregate').style.textDecoration = 'line-through';
            break;
        case 3 :
            document.getElementById('petrollier').style.textDecoration = 'line-through';
            break;
        case 4 :
            //verify if the other porte avion is sinked
            test = 5;
            multipleboats = document.getElementById('porteavions');
            //if the other porte avion sinked, line through
            if (containsDigit(test) == false) {
                multipleboats.style.textDecoration = 'line-through';
            //else, show there is -1 porte avion
            } else {
                multipleboats.innerText = '';
                multipleboats.innerText = 'Porte avions x1';
            }
            break;
        //same as case 4 but reverse
        case 5 :
            test = 4
            multipleboats = document.getElementById('porteavions');
            if (containsDigit(test) == false) {
                multipleboats.style.textDecoration = 'line-through';
            } else {
                multipleboats.innerText = '';
                multipleboats.innerText = 'Porte avions x1';
            }
            break;
    } 

    //call checkwin, if true, display alert and restart button
    if (checkWin() == true) {
        alert('Vous avez coulé tous les bateaux !');
        document.getElementById('restart').style.display = 'block';

    }
}

//checking if there is no = values left
function checkWin(){
    var i = 0;
    var j = 0;
    //walk on array
    while (i < pattern.length) {
        j = 0;
        //walk on lines
        while (j < pattern[i].length) {
            //if one tile dont contain 0, return false
            if (pattern[i][j] != 0) {
                return false;
            }
            j++;
        }
        i++;
    }
    //if all the array are 0, return true
    return true;
}


//PROGRAM
writeHtml();
start();
