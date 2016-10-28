const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: [
        'lodash',
        path.join(__dirname, 'src/index.tsx')
    ],
    module: {
        loaders: [{
            test: /\.(ts|tsx)$/,
            loaders: ['ts']
        }],
        preLoaders: [{
            test: /\.js$/,
            loaders: ['source-map']
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src/index.html")
        })
    ],
    devtool: 'source-map'
}