'use strict';
var country;
var add;

var renderWorldMap = { 
    selectMap() {

        //get into <object>
        var svg = document.getElementById('svgPic');
        svg.addEventListener("load", function () {

            var inSvg = svg.contentDocument;

            for (var i = 0; i < 338; i++) {
                //select all paths to add event
                var svgPath = inSvg.querySelectorAll('path');

                /*if (svgPath[i] == undefined){
                    console.log(i);
                    break;
                }*/

                //set function on click
                svgPath[i].addEventListener('click', renderWorldMap.click, false);
                svgPath[i].addEventListener('mouseenter', renderWorldMap.hover, false);
                svgPath[i].addEventListener('mouseout', renderWorldMap.unhover, false);

            }  

        })
    },        

    click(elem) {
        //get id
        country = elem.target.id;
        //if black or blue zone
        if (elem.target.style.fill == 'rgb(176, 224, 230)' || elem.target.style.fill == 'rgb(0, 0, 0)') {
            
            //set red
            var colour = '#B22222';
            elem.target.style.fill = colour;

            //call createlist
            add = true;
            renderWorldMap.createList(country, add);

        //if red zone
        } else {
            //set black
            colour = '#000000';
            elem.target.style.fill = colour;  
            add = false; 
            renderWorldMap.createList(country, add);         
        }
    },

    hover(elem) {
        //if color is not red
        if (elem.target.style.fill != 'rgb(178, 34, 34)') {
            var colour = '#B0E0E6';
            //get id
            country = elem.target.id;
            //set blue
            elem.target.style.fill = colour;
            //show name elemId
            add = true; 
            renderWorldMap.createList(country, add);  
        } 
    }, 

    unhover(elem){
        var colour = '#000000';
        //if not red
        if (elem.target.style.fill != 'rgb(178, 34, 34)') {
            country = elem.target.id;
            //set color
            elem.target.style.fill = colour;
            //hide name elemId
            add = false; 
            renderWorldMap.createList(country, add);  
        } else {
            add = false;
            renderWorldMap.createList(country, add);
        }
    },

    createList(country, add){
        console.log(country);
        var elBody = document.querySelector('body');
        if (add == true) {
            var elTd = document.createElement('td');
            
            elTd.setAttribute('id', country);
            elTd.innerText = country+', ';

            elBody.appendChild(elTd);
            
        } else {
            console.log(country);
            var remp = document.getElementById(country);
            remp.remove();
        }
    }
}

renderWorldMap.selectMap();