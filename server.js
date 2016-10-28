const express = require('express');
const path = require('path');

const app = express();

if (app.get('env') === 'development') {
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpack = require('webpack');
    const config = require('./webpack.dev.config');
    const compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        hot: true,
        historyApiFallback: true
    }));

    app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, 'dist')));

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server listening on: ', port);
});