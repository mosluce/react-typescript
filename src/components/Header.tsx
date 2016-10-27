import React = require('react');

const {Component} = React;

export interface HeaderProperties {
    title: string;
    username: string;

    addTodo(title: string): any
}

export interface HeaderState { }

export class Header extends Component<HeaderProperties, HeaderState> {
    titleField: HTMLInputElement;

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <div>你好，{this.props.username}</div>
                <input type="text" ref={(titleField) => this.titleField = titleField} />
                <button onClick={() => {
                    this.props.addTodo(this.titleField.value)
                    this.titleField.value = '';
                } }>新增</button>
            </div>
        )
    }
}