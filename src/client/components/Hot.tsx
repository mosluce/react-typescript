import React = require('react');

const {Component} = React;

export interface HotProperties { }

export interface HotState { }

export class Hot extends Component<HotProperties, HotState> {
    render() {
        return (
            <div>
                I am Hot
            </div>
        )
    }
}