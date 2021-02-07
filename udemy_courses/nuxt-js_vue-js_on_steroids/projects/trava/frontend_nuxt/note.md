### Setup sass

https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-css

    npm install --save-dev sass sass-loader fibers


<!-- --------------------------------------------------------------- -->
### To polyfill of the JavaScript standard library:

    $ npm install core-js@2 --save // <- for now recomanded
    or
    $ npm install core-js@3 --save 

https://www.npmjs.com/package/core-js 



<!-- --------------------------------------------------------------- -->

### Nuxt Style Resources Module (sass variables)
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

### Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/





<!-- --------------------------------------------------------------- -->
### Javascript detect browser

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
### JavaScript Window Navigator

https://www.w3schools.com/js/js_window_navigator.asp

//  ex: navigator.userAgent.indexOf("Chrome")

used in plugins/detectBrowser.js



<!-- --------------------------------------------------------------- -->

### Google text-to-speech
Easy JavaScript text-to-speech with Google Translate
https://www.youtube.com/watch?v=DOtkNxmg9QY




<!-- --------------------------------------------------------------- -->

### encodeURIComponent()

encodeURIComponent('hello my name is "chistopher\\"')

"hello%20my%20name%20is%20%22chistopher%5C%22"




<!-- --------------------------------------------------------------- -->

### Adding axios to nuxt modules

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

### Vuelidate in nuxt
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

### To install vue-flash-message 

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
### JWT  (jsonwebtoken)
https://www.npmjs.com/package/jsonwebtoken 
https://github.com/vercel/ms // <- time

to install:
    $ npm install jsonwebtoken


<!-- --------------------------------------------------------------- -->

### js-cookie
https://github.com/js-cookie/js-cookie

How to make the cookie expire in less than a day?
https://github.com/js-cookie/js-cookie/wiki/Frequently-Asked-Questions#expire-cookies-in-less-than-a-day

to install:
    $ $ npm install js-cookie --save




<!-- --------------------------------------------------------------- -->

### How to Get and Set CSS Variable Values with JavaScript
https://davidwalsh.name/css-variables-javascript

    # get color of css variable
    console.log(getComputedStyle(document.documentElement).getPropertyValue('--color-primary'))

    # changing or setting a css variable
    document.documentElement.style.setProperty('--color-primary', 'pink');





<!-- --------------------------------------------------------------- -->

### Vue setInterval() And  clearInterval()
https://renatello.com/vue-js-polling-using-setinterval/


used in DeleteAccount.vue

<!-- --------------------------------------------------------------- -->

How TO - Custom Checkbox
https://www.w3schools.com/howto/howto_css_custom_checkbox.asp






<!-- --------------------------------------------------------------- -->

### Dynamic routes in spa generate 404:

    dynamic routes like:

        pages/user/_email/index.vue 

    Will not be generated in an spa so you will get 404.
    You also need to set apache or nginex to fallback to homepage.
    (currently i do not know how to do so)

    Solution:
    My current solution, if you are planning to use a spa. Use a static route 
    and pass the dynamic paramiters as GET requests example:

        pages/user/email/index.vue

    From backend i send request as:

        "FRONTEND_BASE_URL"/user/email/?email=chris12aug@yahoo.com

    From the front end 'pages/user/email/index.vue' i will get the dynamic info (this case 'email') as:

    const email = this.$route.query.email   // <-spa aplication

    instead of:

    const email = this.$route.params.email  // <-universal application

-------------------------------

  Getting the query params from a URL in Nuxt:  

    https://reactgo.com/nuxt-get-query-params/






<!-- --------------------------------------------------------------- -->

### Deploying Nuxt spa

-------------------------------

1st error: SPA, no webserver and routing (this page could not be found)

if yor domain is 'foxcode.io' and you are hosting your site on 'foxcode.io/001'
you need set the route.base property in nuxt.config.js:

        router: {
            base: '/001/',
        },

-------------------------------

2nd error: Static file like image css_styles and js not found give following 
error in console:

    GET http://foxcode.io/_nuxt/eb7ccd7.js 
    net::ERR_ABORTED 404 (Not Found)

in dist folder js files are stored in _nuxt folder _ might give error in some 
browsers to change (automatically) it to nuxt in nuxt.config.js:

        build: {
        publicPath: '/nuxt/',
        // ...
        },

also in the Virtual Host you need to redirect the staric folder with Alias.
Direct a relative path to absolut ex:

    error = GET http://foxcode.io/_nuxt/eb7ccd7.js 
            net::ERR_ABORTED 404 (Not Found)

    need to set Alias:
    Alias /_nuxt /var/www/projects/001_trava/dist/_nuxt

    In my case (A)

-------------------------------

Virtual Host:   foxcode.io.conf

    <VirtualHost *:80>
    ServerName foxcode.io

        Alias /001/nuxt /var/www/projects/001_trava/dist/nuxt   # <- (A)
        Alias /001 /var/www/projects/001_trava/dist             # <- (B)
        <Directory "/var/www/projects/001_trava/dist" >
            allow from all
            AllowOverride All
            Order allow,deny
            Options +Indexes
        </Directory>


        RewriteEngine on
    </VirtualHost>

-------------------------------

3rd             if your domain is 'foxcode.io' 
    & your are hosting the app on 'foxcode.io/001'

    you need to redirect /001 with an Alias as shown at (B) 

-------------------------------

router/base
https://github.com/nuxt/nuxt.js/issues/3160
https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-router/

publicPath
https://stackoverflow.com/questions/60316441/nuxt-js-this-page-could-not-be-found-on-static-page-with-base
https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-build
<!-- --------------------------------------------------------------- -->