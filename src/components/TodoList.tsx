import React = require('react');
import { Todo } from '../models/todo';
import { TodoItem } from './TodoItem';

const {Component} = React;

export interface TodoListProperties {
    todos: Todo[],
    toggle(key: number): any
}

export const TodoList: React.StatelessComponent<TodoListProperties> = (props) => (
    <div>
        <ul>
            {props.todos.map((todo: Todo) => (
                <TodoItem {...todo} onClick={() => props.toggle(todo.key)} />
            ))}
        </ul>
    </div>
)