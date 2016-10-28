import webpack = require('webpack');
import path = require('path');
import HtmlWebpackPlugin = require('html-webpack-plugin')

export const config: webpack.Configuration = {
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '../src/client/index.tsx')
    ],

    output: {
        path: path.join(__dirname, '../dist/client'),
        filename: 'bundle.js',
        publicPath: `http://localhost:${process.env.PORT || 3000}/`
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.ts', '.tsx']
    },

    module: {
        loaders: [{
            test: /\.(ts|tsx)$/,
            loaders: ["react-hot-loader/webpack", "ts"]
        }],
        preLoaders: [{
            test: '/\.js$/',
            loaders: ["source-map"]
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/client/index.html')
        })
    ],

    devtool: 'cheap-module-source-map'
}