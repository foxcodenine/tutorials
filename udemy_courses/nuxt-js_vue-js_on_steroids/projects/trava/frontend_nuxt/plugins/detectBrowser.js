export default ({ app }, inject) => {
    // Inject $detectBrowser() in Vue, context and store.
    
    inject('detectBrowser', () => {
        if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
            return 'Opera';
        } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
            return 'Chrome';
        } else if(navigator.userAgent.indexOf("Safari") != -1) {
            return 'Safari';
        } else if(navigator.userAgent.indexOf("Firefox") != -1 ){
            return 'Firefox';
        } else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
            return 'IE';//crap
        } else {
            return 'Unknown';
        }
    })
  }



// console.log(navigator.platform, navigator.appCodeName,navigator.appName, navigator.product) 
