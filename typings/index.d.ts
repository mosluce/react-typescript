declare module "webpack-dev-middleware" {
    import express = require("express");
    import webpack = require("webpack");
    function webpackDevMiddleware(compiler: webpack.compiler.Compiler, options?: Object):
        (req: express.Request, res: express.Response, next: express.NextFunction) => any;
    export = webpackDevMiddleware;
}

declare module "webpack-hot-middleware" {
    import express = require("express");
    import webpack = require("webpack");
    function webpackHotMiddleware(compiler: webpack.compiler.Compiler):
        (req: express.Request, res: express.Response, next: express.NextFunction) => any;
    export = webpackHotMiddleware;
}

declare module 'react-hot-loader' {
    import React = require('react');

    interface AppContainerProps {
        children?: React.ReactElement<any>
    }

    export class AppContainer extends React.Component<AppContainerProps, {}> { }
}