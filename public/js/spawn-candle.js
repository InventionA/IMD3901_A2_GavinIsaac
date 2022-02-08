'use strict';

AFRAME.registerComponent('spawn',{
    
    //give values to the component
    schema: {
        //put where it needs to spawn
    },
    
    //No doubles on an entity
    multiple: false,
    
    // called when the component is initialized
    init: function() {

        //this attaches this block of code to the aframe element that is given the "spawn" component
        const Context_AF = this;
   
        Context_AF.el.addEventListener('click', function() {
            
            //create the entity 
            const candle = document.createElement('a-cylinder');

            //give it a height
            candle.setAttribute('height', 0.8);
            //give it a radius
            candle.setAttribute('radius', 0.1);
            //move it (TEMP)
            //get a postion
            candle.setAttribute('position', '0 0 -2');

            candle.setAttribute('dragndrop', '')

            //add to scene
            let candles = document.getElementById("candles");
            candles.appendChild(candle);

        });
    }

})
