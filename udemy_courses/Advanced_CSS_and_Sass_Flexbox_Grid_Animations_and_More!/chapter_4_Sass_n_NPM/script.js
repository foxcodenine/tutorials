window.addEventListener('click', e=>{
    const mainBtn = e.target.matches('.btn--animated, .btn--animated *')

    if (mainBtn) setTimeout(()=>{
        window.location.reload();
    }, 100);
});



// document.querySelector('.section-features').addEventListener('onoad', () => {
//     document.querySelector('.feature-box').style['animation'] = 'movingInLeft 1s ease-out'})




let waypoint = new Waypoint({
    element:document.querySelector('.row'),
    handler: function() {

        let allBoxes = Array.from(document.querySelectorAll('.feature-box'));

        let delayX = [0, 0, 250, 500, 750, 1000, 1250];
        let i = 0;
        allBoxes.forEach(node=>{

            i += 1

            setTimeout(()=>{
                node.style['animation'] = 'animationFeatureBox 1.5s ease'
                node.style['display'] = 'block'
                console.log (delayX)
                
            }, delayX[i])

            
        })

            console.log(allBoxes);

        // document.querySelector('.feature-box, .icon-basic-compass').style['animation'] = 'animationFeatureBox 1.5s ease'
        // document.querySelector('.feature-box .icon-basic-compass').style['display'] = 'block'

    }
})