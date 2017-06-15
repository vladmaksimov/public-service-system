'use strict';

var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        'angularjs-app': './src/main/app.js'
        // 'angularjs-app.spec': './src/test/index.spec.js'
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },

    devtool: 'eval',

    module: {
        rules: [

            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },{
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }, {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=img/img-[hash:6].[ext]',
                options: {
                    limit: 10000
                }
            },
            {
                test: /\.(js|es6)$/,
                exclude: /node_modules/,
                loader: 'ng-annotate-loader?add=true!babel-loader?presets[]=es2015',
            }
        ],
        loaders: [
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: "file-loader?name=img/img-[hash:6].[ext]"
            },{
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'ng-annotate?add=true!babel?presets[]=es2015'
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/main/index.html',
            chunks: ['angularjs-app'],
            inject: 'body'
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
};