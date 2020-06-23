// HTMLMediaElement.paused property
// HTMLMediaElement.pause() method will pause playback of the media
// HTMLMediaElement play() method attempts to begin playback of the media

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
    return true;
};

// Update progress & timestamp 
function updateProgress() {
    return true;
};
 
// Set video Progress
function setVideoProgress() {
    return true;
};

// Stop video 
function stopVedio() {
    return true;
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