import React = require('react');

const {Component} = React;

export interface TodoItemProperties extends TodoApp.Todo {
    onClick(): void;
}

export const TodoItem: React.StatelessComponent<TodoItemProperties> = (props) => (
    <li
        onClick={() => props.onClick()}
        style={{
            textDecoration: props.completed ? 'line-through' : 'none',
            cursor: props.completed ? 'default' : 'pointer'
        }}>
        {props.text}
    </li>
)