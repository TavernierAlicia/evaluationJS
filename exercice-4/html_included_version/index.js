'use strict';
var countriesTab;

var renderWorldMap = { 
    selectMap() {

        //get into <object>
        var svg = document.getElementById('svgPic');
        svg.addEventListener("load", function () {

            //var inSvg = svg.contentDocument;
            var inSvg = svg.getSVGDocument();

            for (var i = 0; i < 197; i++) {

                //select all paths id
                //var svgPath = inSvg.getElementsByTagName('path');
                //or
                //var svgPath = inSvg.querySelectorAll('path');

                //console.log(svgPath[i]);
            
                //set function on click
                //svgPath[i].addEventListener('click', click, false);
                //svgPath[i].addEventListener('mouseenter', hover, false);
            }  

        })
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