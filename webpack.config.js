const webpack = require('webpack');
const ExtractTextEebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        "index": path.join(__dirname, "src/index.tsx")
    },

    output: {
        filename: "[name].js",
        path: path.join(__dirname, 'dist')
    },

    devtool: 'source-map',

    module: {
        loaders: [{
            test: /\.tsx$/,
            loader: 'ts'
        }],
        preLoaders: [{
            test: /\.js$/,
            loader: 'source-map'
        }]
    },

    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    externals: [],

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}