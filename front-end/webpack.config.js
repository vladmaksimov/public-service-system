'use strict';

const path = require('path'),
    webpack = require('webpack');
    // HtmlWebpackPlugin = require('html-webpack-plugin');

const output = path.join(__dirname, 'target/static');

module.exports = {
    entry: './src/main/app.module.js',
    output: {
        path: output,
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            { test: /\.html$/, loader: "html-loader" },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    devtool: "#inline-source-map"
};