In order to use await/async you will need to install a couple of Babel dependencies. 
This works with Vuejs project -

npm install --save-dev babel-polyfill 
npm install --save-dev babel-plugin-transform-regenerator

Once installed, you will need to modify your .babelrc file to use the plugin as follows -

{
    "plugins": ["transform-regenerator"]
}

and also your webpack.config.js file to use the regenerator as follows -

require("babel-polyfill");

module.exports = {
  entry: ["babel-polyfill", "./app.js"]
};
