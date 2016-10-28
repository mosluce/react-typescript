import React = require('react');
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const {Component} = React;

export interface HeaderProperties {
    dispatch?(action: Todo.Action)
}

export interface HeaderState { }

@connect()
export class Header extends Component<HeaderProperties, HeaderState> {
    field: HTMLInputElement

    render() {
        let {dispatch} = this.props;

        return (
            <div>
                <input type="text" ref={(field) => this.field = field} />
                <button onClick={() => {
                    if (this.field.value && this.field.value.trim() !== '') {
                        dispatch(addTodo(this.field.value))
                        this.field.value = null;
                    }
                } }>ADD TODO</button>
            </div>
        )
    }
}