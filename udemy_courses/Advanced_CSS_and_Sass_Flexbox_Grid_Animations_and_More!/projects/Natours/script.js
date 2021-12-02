refreshPage();

const mq = window.matchMedia( "(min-width: 56.25em)" );

if (mq.matches) {
    animatingComposition()
    animatingFeatureBoxes();
    animatingCards();
    animatingStories();
} 
// _____________________________________________________________________

function refreshPage() {
    window.addEventListener('click', e=>{
        const mainBtn = e.target.matches('.refresh, .refresh *')
        
        console.log(mainBtn);
    
        if (mainBtn) setTimeout(()=>{
            window.location.reload();
        }, 100);
    });
    
    // , .btn--animated *:not(.exclude)'
    
}


// _____________________________________________________________________

function animatingComposition() {

    // ---------------------------

    let composition = Array.from(document.querySelectorAll('.composition__photo'));

    composition.forEach(cImg=>{
        cImg.style['animation'] = 'backwards'
        cImg.style['opacity'] = '0'         
    })

    // ---------------------------

    let waypoint_featureBox = new Waypoint({
        element:document.querySelector('.composition'),
        handler: function() {
                    

            let timeDelay = [0, 0, 500, 700, 900, 1000, 1250];
            let i = 0;


            composition.forEach(box=>{

                i += 1

                setTimeout(()=>{
                    box.style['animation'] = 'animationBoxs 1.5s ease'
                    box.style['opacity'] = '1'
                                    
                }, timeDelay[i])            
            })
        },
        offset: '70%'
    })
}
// _____________________________________________________________________

function animatingFeatureBoxes() {

    // ---------------------------

    let boxes = Array.from(document.querySelectorAll('.feature-box'));

    boxes.forEach(box=>{
        box.style['animation'] = 'backwards'
        box.style['opacity'] = '0'         
    })

    // ---------------------------

    let waypoint_featureBox = new Waypoint({
        element:document.querySelector('.row--features'),
        handler: function() {
                    

            let timeDelay = [0, 0, 250, 500, 750, 1000, 1250];
            let i = 0;


            boxes.forEach(box=>{

                i += 1

                setTimeout(()=>{
                    box.style['animation'] = 'animationBoxs 1.5s ease'
                    box.style['opacity'] = '1'
                                    
                }, timeDelay[i])            
            })
        },
        offset: '70%'
    })
}
// _____________________________________________________________________

function animatingCards() {

    // ---------------------------

    let cards = Array.from(document.querySelectorAll('.card'));

    cards.forEach(card=>{
        card.style['animation'] = 'backwards'
        card.style['opacity'] = '0'         
    })

    // ---------------------------

    const waypoint_card = new Waypoint({
        element: document.querySelector('.row--card'),
        
        handler: function() {       
            

            let timeDelay = [0, 0, 250, 500, 750, 1000, 1250];
            let i = 0;

            cards.forEach(function(card){
                
                i += 1;

                setTimeout(()=>{
                    
                    card.style['animation'] = 'animationBoxs 1.5s ease'
                    card.style['opacity'] = 1
                    
                }, timeDelay[i]);
            });
        },
        offset: '70%'

    });
}

// _____________________________________________________________________

function animatingStories() {

    // ---------------------------

const rows_story = Array.from(document.querySelectorAll('.row--story'))

    // ---------------------------

    rows_story.forEach(story => {

        story.style['animation-fill-mode'] = 'backwards';
        story.style['opacity'] = 0;
        

        const waypoint_stories = new Waypoint({

            element:story,
        
            handler: function() {            
        
                story.style['animation'] = 'animationBoxs 1.8s ease'
                story.style['opacity'] = 1
                
            },
            
            offset: '60%'
        })
    })
}

// _____________________________________________________________________

