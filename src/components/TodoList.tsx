import React = require('react');
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { TodoItem } from './TodoItem';

const {Component} = React;

export interface TodoListProperties {
    todos: Todo.Item[]

    dispatch?(action: Todo.Action)
}

function map(state: Todo.State, props: TodoListProperties) {
    let todos: Todo.Item[];

    switch (state.visibilityFilter) {
        case "ACTIVE":
            todos = state.todos.filter((t) => !t.completed)
            break;
        case "COMPLETED":
            todos = state.todos.filter((t) => t.completed)
            break;
        default:
            todos = state.todos
    }

    return {
        todos
    }
}

@connect(map)
export class TodoList extends Component<TodoListProperties, React.ComponentState> {
    render() {
        let {todos, dispatch} = this.props;
        return (
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem {...todo} onClick={() => dispatch(toggleTodo(index))} />
                ))}
            </ul>
        )
    }
}
