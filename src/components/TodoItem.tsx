import React = require('react');
import { Todo } from '../models/todo';

const {Component} = React;

export interface TodoItemProperties extends Todo {
    onClick(): any
}

export const TodoItem: React.StatelessComponent<TodoItemProperties> = (props) => (
    <li
        style={{
            textDecoration: props.completed ? 'line-through' : 'none',
            cursor: 'point'
        }}
        onClick={() => props.onClick()}>
        {props.title}
    </li>
)