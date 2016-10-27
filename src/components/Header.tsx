import React = require('react');

const {Component} = React;

export interface HeaderProperties {
    onAddTodo(text: string): void
}

export const Header: React.StatelessComponent<HeaderProperties> = (props) => (
    <div>
        <input type='text' ref={(input) => this.input = input} />
        <button onClick={() => {
            props.onAddTodo(this.input.value)
        } }>
            Add
        </button>
    </div>
)