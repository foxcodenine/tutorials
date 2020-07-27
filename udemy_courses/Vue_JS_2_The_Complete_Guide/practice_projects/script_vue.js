
myData= {
    mainTitle: 'Vue Music Player',
    songs: ['hey', 'summer', 'ukulele'],
    title: 'hey',        
    songIndex: 0,
    isPlaying: false,   
    srcAudio: './music/hey.mp3',
    scrImg: './images/hey.jpg'
}

vm = new Vue({

    el: '#app',
    data: myData,

    watch: {
        isPlaying: function() {

            if(this.isPlaying){
                console.log('it is playing') 
                this.playSong();                       
        
            } else {
                console.log('it is NOT playing')
                this.audioAPI.pause();
            }            
        },
        songIndex: function() {
            this.scrImg = `./images/${this.songs[this.songIndex]}.jpg`;
            this.title = this.capitalizeFirstLetter(this.songs[this.songIndex]);
        },
        audioAPI: function() {
            console.log('l')
        }
    },
    methods: {
        playSong: function() {
            this.srcAudio = `./music/${this.songs[this.songIndex]}.mp3`;
            this.audioAPI.src = this.srcAudio;  
            this.audioAPI.play();
            console.log(this.audioAPI)
        },
        forward: function() {
            this.songIndex += 1;
            
            if (this.songIndex >= this.songs.length) {
                this.songIndex = 0;
            }
            if(this.isPlaying){
                this.playSong();
            }           
        },
        back: function() {
            this.songIndex -= 1;
            
            if (this.songIndex < 0) {
                this.songIndex = this.songs.length - 1;
            }
            if(this.isPlaying){
                this.playSong();
            } 
        },
        updateProgress: function(e) {

            const {duration, currentTime} = e.srcElement;
        
            const progressPrecent = `${Math.ceil(currentTime / duration * 100)}%`
            
            document.getElementById('progress').style['width'] = progressPrecent;    
            
        },
        setProgess: function($event) {
            console.log('ll')
            const width = document.getElementById('progress-container').clientWidth;
        
            const clickX = $event.offsetX; 
        
            const duration = this.audioAPI.duration;
            console.log((clickX / width) * duration)
        
            this.audioAPI.currentTime = (clickX / width) * duration;        
        
        },
        capitalizeFirstLetter: function (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        getFolder: function() {
            console.log('hhhhh');
        }
    },
    computed: {
        updateImg: function() {
            return this.scrImg;
        }
    }   
})

vm.audioAPI = new Audio();



vm.audioAPI.addEventListener('timeupdate', e => {
    vm.updateProgress(e)
    console.log('yes')
})


vm.audioAPI.addEventListener('ended', () => {
    vm.forward();
    console.log('yes')
})