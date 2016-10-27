import React = require('react');
import { Header } from './Header';
import { TodoList } from './TodoList';
import { Footer } from './Footer';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, setVisibilityFilter } from '../actions';

const {Component} = React;

export interface AppProperties {
    dispatch?({});
    visibleTodo?: TodoApp.Todo[];
    visibilityFilter?: TodoApp.VisibilityFilter;
}

class App extends Component<AppProperties, {}> {
    render() {
        let {dispatch, visibleTodo, visibilityFilter} = this.props;

        console.log(this.props);

        return (
            <div>
                <Header
                    onAddTodo={(text) => dispatch(addTodo(text))} />
                <TodoList
                    todos={visibleTodo}
                    onTodoClick={(index) => dispatch(toggleTodo(index))} />
                <Footer filter={visibilityFilter}
                    onFilterChange={(filter) => dispatch(setVisibilityFilter(filter))} />
            </div>
        )
    }
}

function selectTodos(todos: TodoApp.Todo[], filter: TodoApp.VisibilityFilter) {
    switch (filter) {
        case "SHOW_ALL":
            return todos;
        case "SHOW_COMPLETED":
            return todos.filter(todo => todo.completed);
        case "SHOW_ACTIVE":
            return todos.filter(todo => !todo.completed);
    }
}

function select(state: TodoApp.AppState) {
    return {
        visibilityFilter: state.visibilityFilter,
        visibleTodo: selectTodos(state.todos, state.visibilityFilter)
    }
}

export default connect<AppProperties, {}, {}>(select)(App);