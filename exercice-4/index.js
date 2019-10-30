'use strict';
var country;
var add;

var renderWorldMap = { 
    selectMap() {

        //get into div
        var svg = document.querySelector('#svg');

        //get all paths
        var svgPath = svg.querySelectorAll('path');
        var elUl = document.querySelector('#list');

        //affect event to each path with id
        for (var i = 0; i < svgPath.length; i++) {

            var countryInList = document.createElement('li');
            countryInList.innerText = svgPath[i].id;
            countryInList.setAttribute('id', svgPath[i].id);
            elUl.appendChild(countryInList);

            //set event
            svgPath[i].addEventListener('click', renderWorldMap.click, false);
            svgPath[i].addEventListener('mouseenter', renderWorldMap.hover, false);
            svgPath[i].addEventListener('mouseout', renderWorldMap.unhover, false);
        }  
    },        

    click(elem) {
        //get id
        country = elem.target.id;
        //if black or blue zone
        if (elem.target.style.fill == 'rgb(176, 224, 230)' || elem.target.style.fill == 'rgb(0, 0, 0)') {
            
            //set red
            var color = '#B22222';
            elem.target.style.fill = color;

            //call createlist
            add = true;
            renderWorldMap.createList(country, add);

        //if red zone
        } else {
            //set black
            elem.target.style.fill = '#000000';  
            add = false; 
            renderWorldMap.createList(country, add);         
        }
    },

    hover(elem) {
        //if color is not red
        if (elem.target.style.fill != 'rgb(178, 34, 34)') {
            var color = '#B0E0E6';
            //get id
            country = elem.target.id;
            //set blue
            elem.target.style.fill = color;
            //show name elemId
            add = true; 
            renderWorldMap.createList(country, add);  
        } 
    }, 

    unhover(elem){
        var color = '#000000';
        //if not red
        if (elem.target.style.fill != 'rgb(178, 34, 34)') {
            country = elem.target.id;
            //set color
            elem.target.style.fill = color;
            //hide name elemId
            add = false; 
            renderWorldMap.createList(country, add);  
        } else {
            add = false;
            renderWorldMap.createList(country, add);
        }
    },

    createList(country, add){
        var elSelected = document.querySelector('#selected');
        if (add == true) {
            var elLi = document.createElement('li');
            elLi.style.display = 'inline-block';
            elLi.style.marginRight = '3px';
            elLi.setAttribute('id', country+'text');
            elLi.innerText = country+', ';

            elSelected.appendChild(elLi);
            
        } else {
            var remp = document.getElementById(country+'text');
            if (remp != null) {
                remp.remove();
            }
            
        }
    }
}

renderWorldMap.selectMap();