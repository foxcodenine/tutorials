const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    // entry: ['@babel/polyfill', './src/index.js'],
    entry: ['./src/index.js'],
    
    
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './dist/'
    },

    mode: 'none',


    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: {
                    loader: 'file-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    // {loader: 'style-loader'}, 
                    {loader: MiniCssExtractPlugin.loader}, 
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    // {loader: 'style-loader'}, 
                    {loader: MiniCssExtractPlugin.loader}, 
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ]


}