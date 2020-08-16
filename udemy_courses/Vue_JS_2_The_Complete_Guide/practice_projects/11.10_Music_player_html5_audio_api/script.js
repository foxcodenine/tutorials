// Web Audio API
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API

// element.classList.contains('className');

// e.srcElement

// const {duration, currentTime} = e.srcElement;   <-- destructuring

// Element.clientWidth

// Element.audio.currentTime

// _____________________________________________________________________

const elem = {
    musicContainer: document.getElementById('music-container'),
    
    playBtn: document.getElementById('play'),
    prevBtn: document.getElementById('prev'),
    nextBtn: document.getElementById('next'),

    audio: document.getElementById('audio'),
    progress: document.getElementById('progress'),
    progressContainer: document.getElementById('progress-container'),

    title: document.getElementById('title'),
    cover: document.getElementById('cover'),
}

// _____________________________________________________________________

// Song title
const songs = ['hey', 'summer', 'ukulele'];

// Keep track of songe
let songIndex = 0;

// _____________________________________________________________________

// Functions

function loadSong(song) {
    elem.title.innerText = song;
    elem.audio.src = `music/${song}.mp3`
    elem.cover.src = `images/${song}.jpg`
}

// ________________________

// Play - Pause toggle

function togglePlayPause() {
    const  isPlaying = elem.musicContainer.classList.contains('play');

    
    switch (isPlaying) {
        case true:
            elem.musicContainer.classList.remove('play');

            elem.playBtn.querySelector('i.fas').classList.remove('fa-play');
            elem.playBtn.querySelector('i.fas').classList.add('fa-pause');

            elem.audio.pause();
            break;

        default:
            elem.musicContainer.classList.add('play');

            elem.playBtn.querySelector('i.fas').classList.remove('fa-pause');
            elem.playBtn.querySelector('i.fas').classList.add('fa-play');

            elem.audio.play();
    }
}

// ________________________

// Change Songe 

function changeSong(direction) {

    const songsNum = songs.length;

    if (direction === 'next') {
        songIndex++

        if (songIndex === songsNum) {
            songIndex = 0;
        }

        loadSong(songs[songIndex]);
        elem.musicContainer.classList.remove('play');
        togglePlayPause();


    } else {
        songIndex--

        if (songIndex === -1) {
            songIndex = songsNum -1;
        }

        loadSong(songs[songIndex]);
        elem.musicContainer.classList.remove('play');
        togglePlayPause();
    }
}

// ________________________

function updateProgress(e) {

    const {duration, currentTime} = e.srcElement;

    const progressPrecent = `${Math.ceil(currentTime / duration * 100)}%`

    elem.progress.style['width'] = progressPrecent;    
    
}

// Set progress bar

function setProgess(e) {
    const width = this.clientWidth;

    const clickX = e.offsetX; 

    const duration = elem.audio.duration;

    elem.audio.currentTime = (clickX / width) * duration;


}

// _____________________________________________________________________

// Controller 

(function(){

    // Initially load song details into DOM
    loadSong(songs[songIndex]);


    // Event listeners

    // Play-Pause
    elem.playBtn.addEventListener('click', togglePlayPause);

    // Forward
    elem.nextBtn.addEventListener('click', () => {
        changeSong('next');
    });

    // Back
    elem.prevBtn.addEventListener('click', () => {
        changeSong('back');
    });

    // Time/Song Update
    elem.audio.addEventListener('timeupdate', updateProgress);

    // Click on progress bar 
    elem.progressContainer.addEventListener('click', setProgess)

    // Song ends
    elem.audio.addEventListener('ended', () => {
        changeSong('next');
    })


 })();
