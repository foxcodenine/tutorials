const path = require("path");    

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // -- this will set the output directory
  outputDir: path.resolve(__dirname, "./dist"),

  // -- this will set the root url address
  publicPath: '/sub-directory/'  
  
})
