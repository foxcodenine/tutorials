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
                card.style['opacity'] = 1
                
            }, timeDelay[i]);
        });
    },
    offset: '70%'

});


// _____________________________________________________________________

const rows_story = Array.from(document.querySelectorAll('#row--story'))


rows_story.forEach(story => {

    story.style['animation-fill-mode'] = 'backwards'
    story.style['opacity'] = 0
    

    const waypoint_stories = new Waypoint({

        element:story,
    
        handler: function() {            
    
            story.style['animation'] = 'animationStories 1.8s ease'
            story.style['opacity'] = 1
            
        },
        
        offset: '70%'
    })
})