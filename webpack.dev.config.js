const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        'lodash',
        path.join(__dirname, 'src/index.tsx')
    ],
    module: {
        loaders: [{
            test: /\.(ts|tsx)$/,
            loaders: ['react-hot-loader/webpack', 'ts']
        }],
        preLoaders: [{
            test: /\.js$/,
            loaders: ['source-map']
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: 'http://localhost:3000/'
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src/index.html")
        })
    ],
    devtool: 'source-map'
}