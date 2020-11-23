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