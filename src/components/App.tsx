import React = require('react');
import { Header } from './Header';
import { TodoList } from './TodoList';
import { Footer } from './Footer';

const {Component} = React;

export interface AppProperties { }

export interface AppState { }

export class App extends Component<AppProperties, AppState> {
    render() {
        return (
            <div>
                <Header />
                <TodoList />
                <Footer />
            </div>
        )
    }
}