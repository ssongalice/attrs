"use strict"

let path = require('path');
let webpack = require('webpack');

let entryPoint = ['@babel/polyfill', './static/main.js'];
let outputPath = path.resolve(__dirname, './build');
let fileName = 'app.js';
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// Main webpack config
module.exports = {
    entry: {
        app: entryPoint
    },
    output: {
        path: outputPath,
        filename: fileName
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env'] // Transpile the ES6 to es2015 standard
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // Resolving the vue var for standalone build
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ] 
};
