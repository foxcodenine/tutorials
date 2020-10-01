$ npm install --save vue-router
$ npm install --save vuex
$ npm install --save axios



<!--    -await/async-    -->
1. In order to use await/async you will need to install a couple of 
Babel dependencies: 

npm install --save-dev babel-polyfill  
npm install --save-dev babel-plugin-transform-regenerator

2. Once installed, you will need to modify your .babelrc file to use the 
plugin as follows -

{
    "plugins": ["transform-regenerator"]
}

3. and also your webpack.config.js file to use the regenerator as 
follows -

require("babel-polyfill");

module.exports = {
  entry: ["babel-polyfill", "./app.js"]
};
<!--    -await/async-    -->