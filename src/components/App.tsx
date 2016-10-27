import React = require('react');
import { Todo } from '../models/todo';
import { Header } from './Header';
import { TodoList } from './TodoList';

const {Component} = React;

export interface AppProperties { }
export interface AppState {
    todos: Todo[]
}

export class App extends Component<AppProperties, AppState>{
    constructor(props: AppProperties) {
        super(props)

        this.state = {
            todos: []
        };
    }

    addTodo(title: string) {
        let todos = this.state.todos;

        todos.push({
            completed: false,
            key: todos.length + 1,
            title: title
        });

        this.setState({ todos });
    }

    toggle(key: number) {
        let todos = this.state.todos;

        todos = todos.map((todo) => {
            if (todo.key === key) {
                todo.completed = !todo.completed;
            }

            return todo;
        });

        this.setState({ todos });
    }

    render() {
        return (
            <div>
                <Header title="代辦事項"
                    username="默司"
                    addTodo={(title) => this.addTodo(title)} />
                <TodoList todos={this.state.todos} toggle={(key) => this.toggle(key)} />
            </div>
        )
    }
}

