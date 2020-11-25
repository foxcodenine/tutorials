Setup sass
https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-css


<!-- --------------------------------------------------------------- -->

Nuxt Style Resources Module (sass variables)
https://dev.to/ceppeu/using-sass-global-variables-in-nuxt-js-j0k

module.exports = {
    // Other nuxt.config.js
    
    modules: ['@nuxtjs/style-resources'],
    styleResources: {
        scss: [
            'assets/scss/file/_path.scss',
            'assets/scss/file/_path-two.scss'
        ]
    }
}

<!-- --------------------------------------------------------------- -->

Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/


<!-- --------------------------------------------------------------- -->
Javascript detect browser

https://www.codegrepper.com/code-examples/delphi/javascript+detect+browser+chrome+firefox

function detectBrowser() { 
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
} 

<!-- --------------------------------------------------------------- -->
JavaScript Window Navigator

https://www.w3schools.com/js/js_window_navigator.asp



<!-- --------------------------------------------------------------- -->

Google text-to-speech
Easy JavaScript text-to-speech with Google Translate
https://www.youtube.com/watch?v=DOtkNxmg9QY




<!-- --------------------------------------------------------------- -->
encodeURIComponent()

encodeURIComponent('hello my name is "chistopher\\"')

"hello%20my%20name%20is%20%22chistopher%5C%22"

<!-- --------------------------------------------------------------- -->