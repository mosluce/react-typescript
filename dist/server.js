"use strict";
var express = require('express');
var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
function normalizePort(port) {
    if (!port)
        return 3000;
    var n = parseInt(port);
    if (!isNaN(n)) {
        return n;
    }
    return 3000;
}
var app = express();
var port = normalizePort(process.env.PORT);
if (app.get('env') === 'development') {
    var config = require('./webpack.config.dev').config;
    var compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        hot: true,
        historyApiFallback: true
    }));
    app.use(webpackHotMiddleware(compiler));
}
app.use(express.static(path.join(__dirname, "client")));
app.listen(port, function () {
    console.log('Server on :', port);
});
//# sourceMappingURL=server.js.map