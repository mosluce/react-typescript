import React = require('react');
import { Header } from './Header';

const {Component} = React;

export interface AppProperties { }

export interface AppState { }

export class App extends Component<AppProperties, AppState> {
    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
}