import React = require('react');
import { TodoItem } from './TodoItem';

const {Component} = React;

export interface TodoListProperties {
    todos: TodoApp.Todo[];
    onTodoClick(index: number): void;
}

export const TodoList: React.StatelessComponent<TodoListProperties> = (props) => (
    <ul>
        {props.todos.map((todo, index) =>
            <TodoItem {...todo}
                key={index}
                onClick={() => props.onTodoClick(index)} />
        )}
    </ul>
)