import React = require('react');
import { Hot } from './Hot';

const {Component} = React;

export interface AppProperties { }

export interface AppState { }

export class App extends Component<AppProperties, AppState> {
    render() {
        return (
            <div>
                <Hot />
            </div>
        )
    }
}