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

Adding axios to nuxt modules

https://axios.nuxtjs.org/setup

    $ npm install --save @nuxtjs/axios


                                                          nuxt.config.js
export default {
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    // proxy: true
  }
}




<!-- --------------------------------------------------------------- -->

Vuelidate in nuxt
https://github.com/nuxt/nuxt.js/issues/1391

1.You need to install first:

    $ npm install vuelidate --save
    

2.In the plugins file, add the following new file Vuelidate.js to add 
the following:

                                                            Vuelidate.js

    import Vue from 'vue';
    import Vuelidate from 'vuelidate';
    Vue.use(Vuelidate);

3. Register as a pluging in nuxt.config.js

                                                          nuxt.config.js

plugins: [
     {src: '~/plugins/Vuelidate'}
  ]

<!-- --------------------------------------------------------------- -->

To install vue-flash-message 

https://www.npmjs.com/package/@smartweb/vue-flash-message

1. Install
    $ npm i @smartweb/vue-flash-message@next --save

    or stable version (vue2)
    $ npm install --save vue-flash-message --save 

    (note in my case I am useing this version because current
    latest verssion is buged:
    $ install --save @smartweb/vue-flash-message@^0.6.10)

2. In plugings folder create flashMessage.js 

												flashMessage.js
	import Vue from 'vue';
	import VueFlashMessage from '@smartweb/vue-flash-message';
	 
	Vue.use(VueFlashMessage);

3. Register it in the nuxt.config.js in the plugins array:

	  plugins: [
	    { src: '@/plugins/flashMessage.js', mode: 'client' }
	  ],


<!-- --------------------------------------------------------------- -->
JWT  (jsonwebtoken)
https://www.npmjs.com/package/jsonwebtoken 
https://github.com/vercel/ms // <- time

to install:
    $ npm install jsonwebtoken

<!-- --------------------------------------------------------------- -->

js-cookie
https://github.com/js-cookie/js-cookie

How to make the cookie expire in less than a day?
https://github.com/js-cookie/js-cookie/wiki/Frequently-Asked-Questions#expire-cookies-in-less-than-a-day

to install:
    $ $ npm install js-cookie --save

<!-- --------------------------------------------------------------- -->

How to Get and Set CSS Variable Values with JavaScript
https://davidwalsh.name/css-variables-javascript

    console.log(getComputedStyle(document.documentElement).getPropertyValue('--color-primary'))
    document.documentElement.style.setProperty('--color-primary', 'pink');

<!-- --------------------------------------------------------------- -->

Vue setInterval() And  clearInterval()
https://renatello.com/vue-js-polling-using-setinterval/

<!-- --------------------------------------------------------------- -->
How TO - Custom Checkbox
https://www.w3schools.com/howto/howto_css_custom_checkbox.asp