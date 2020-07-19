window.addEventListener('click', e=>{
    const mainBtn = e.target.matches('.btn--animated, .btn--animated *')

    if (mainBtn) setTimeout(()=>{
        window.location.reload();
    }, 100);
});




// _____________________________________________________________________



let waypoint_featureBox = new Waypoint({
    element:document.querySelector('#row--features'),
    handler: function() {

        

        let allBoxes = Array.from(document.querySelectorAll('.feature-box'));

        let timeDelay = [0, 0, 250, 500, 750, 1000, 1250];
        let i = 0;


        allBoxes.forEach(node=>{

            i += 1

            setTimeout(()=>{
                node.style['animation'] = 'animationFeatureBox 1.5s ease'
                node.style['display'] = 'block'
                                
            }, timeDelay[i])            
        })
    },
    offset: '70%'
})

// _____________________________________________________________________

const waypoint_card = new Waypoint({
    element: document.querySelector('#row--cards'),
    
    handler: function() {
        
        let cards = Array.from(document.querySelectorAll('.card'));

        let timeDelay = [0, 0, 250, 500, 750, 1000, 1250];
        let i = 0;

        cards.forEach(function(card){
            
            i += 1;

            setTimeout(()=>{
                
                card.style['animation'] = 'animationFeatureBox 1.5s ease'
                card.style['display'] = 'block'
                
            }, timeDelay[i]);
        });
    },
    offset: '70%'

});