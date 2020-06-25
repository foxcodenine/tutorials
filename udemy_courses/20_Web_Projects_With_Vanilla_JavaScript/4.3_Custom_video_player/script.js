// https://www.w3schools.com/tags/ref_av_dom.asp
// HTMLMediaElement.paused property
// HTMLMediaElement.pause() method will pause playback of the media
// HTMLMediaElement.play() method attempts to begin playback of the media
// load() 	    Re-loads the audio/video element
// duration 	Returns the length of the current audio/video (in seconds)
// currentTime 	Sets or returns the current playback position in the audio/video (in seconds)
// if a string number is add a + symbole it will change in to a int or foat

/**Events
 *      stop
 *      play    
 *      timeupdate
 */

// _____________________________________________________________________
const elem = {
    video: document.getElementById('video'),
    play: document.getElementById('play'),
    stop: document.getElementById('stop'),
    progress: document.getElementById('progress'),
    timestamp: document.getElementById('timestamp'),
}

// Play & pause video
function toggleVideoStatus() {
    if (elem.video.paused){
        elem.video.play();
    } else {
        elem.video.pause()
    }
};

// Update play/pause icon 
function updatePlayIcon() {
    if (elem.video.paused) {
        elem.play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    } else {
        elem.play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    }
};

// Update progress & timestamp 
function updateProgress() {

    // Set Progress Bar:
    console.log(elem.video.currentTime, elem.video.duration)
    elem.progress.value = (elem.video.currentTime / elem.video.duration) * 100

    // Set TimesStamp:
    // Get minutes:
    let minutes = Math.floor(elem.video.currentTime/60);
    if (minutes < 10) {
        minutes = `0${minutes}`
    } else {
        minutes = toString(minutes)
    }
    // Get secondes:

    let secondes = Math.floor(elem.video.currentTime );
    if (secondes < 10) {
        secondes = `0${secondes}`
    } else {
        secondes = `${secondes}`
    }

    elem.timestamp.innerText = `${minutes}:${secondes}`;
};
 
// Set video Progress
function setVideoProgress() {
    elem.video.currentTime = (+elem.progress.value * elem.video.duration) / 100;
    
};

// Stop video 
function stopVedio() {
    // elem.video.load();
    elem.video.currentTime = 0;
    elem.video.pause();
};

// _____________________________________________________________________

// Events listeners
elem.video.addEventListener('click', toggleVideoStatus);
elem.video.addEventListener('pause', updatePlayIcon);
elem.video.addEventListener('play', updatePlayIcon);
elem.video.addEventListener('timeupdate', updateProgress);

elem.play.addEventListener('click', toggleVideoStatus); 

elem.stop.addEventListener('click', stopVedio);

elem.progress.addEventListener('click', setVideoProgress);