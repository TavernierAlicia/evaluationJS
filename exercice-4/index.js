'use strict';

var renderWorldMap = { 
    selectMap() {

        //query get all path   
        var allCountries = document.getElementsByTagName('path');
        console.log(allCountries);
        allCountries.addEventListener('click', renderWorldMap.click, false);
        allCountries.addEventListener('mouseenter', renderWorldMap.hover, false);

    
    },        

    click(elem) {
        console.log('ici');
        var colour = '#B22222';
        //set color
        elem.setAttributeNS(null, 'fill', colour);
       //show name elemId
       console.log(elem.target.id);
    },

    hover(elem) {
        var colour = '#B0E0E6';
        //set color
        elem.setAttributeNS(null, 'fill', colour);
        //show name elemId
        console.log(elem.target.id);
    }

}
renderWorldMap.selectMap();