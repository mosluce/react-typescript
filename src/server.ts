import express = require('express');
import path = require('path');
import webpack = require('webpack');
import webpackDevMiddleware = require('webpack-dev-middleware');
import webpackHotMiddleware = require('webpack-hot-middleware');

function normalizePort(port: any) {
    if (!port) return 3000;

    let n = parseInt(port);

    if (!isNaN(n)) {
        return n;
    }

    return 3000;
}

let app = express();
let port = normalizePort(process.env.PORT);

if (app.get('env') === 'development') {
    let config = require('./webpack.config.dev').config as webpack.Configuration;
    let compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        hot: true,
        historyApiFallback: true
    }))

    app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, "client")));
app.listen(port, () => {
    console.log('Server on :', port);
})