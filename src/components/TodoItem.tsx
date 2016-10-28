import React = require('react');

const {Component} = React;

export interface TodoItemProperties extends Todo.Item {
    onClick()
}

export interface TodoItemState { }

export class TodoItem extends Component<TodoItemProperties, TodoItemState> {
    render() {
        let {onClick, completed, text} = this.props;
        return (
            <li onClick={onClick}
                style={{
                    cursor: 'point',
                    textDecoration: completed ? 'line-through' : 'none'
                }}>
                {text}
            </li>
        )
    }
}