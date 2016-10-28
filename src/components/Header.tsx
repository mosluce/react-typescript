import React = require('react');

const {Component} = React;

export interface HeaderProperties { }

export interface HeaderState { }

export class Header extends Component<HeaderProperties, HeaderState> {
    render() {
        return (
            <div>
                Hi
            </div>
        )
    }
}