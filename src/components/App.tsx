import React = require('react');

const {Component} = React;

export interface AppProperties { }

export interface AppState { }

export class App extends Component<AppProperties, AppState> {
    render() {
        return (
            <div>
                Hello
            </div>
        )
    }
}