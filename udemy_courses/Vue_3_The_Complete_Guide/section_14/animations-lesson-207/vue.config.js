const { defineConfig } = require('@vue/cli-service')

const path = require("path");                                           // <- Added line

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: path.resolve(__dirname, "./dist"),                         // <- Added line

  publicPath: process.env.NODE_ENV === 'production' ? '/000' : ''       // <- Added line
})
