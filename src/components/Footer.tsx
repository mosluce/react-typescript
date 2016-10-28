import React = require('react');
import { connect } from 'react-redux';
import { setVisibility } from '../actions';

const {Component} = React;

export interface FooterProperties {
    visibilityFilter: Todo.VisibilityFilter
    dispatch?(action: Todo.Action)
}

function map(state: Todo.State, props: FooterProperties) {
    return {
        visibilityFilter: state.visibilityFilter
    }
}

@connect(map)
export class Footer extends Component<FooterProperties, React.ComponentState> {
    render() {
        let {visibilityFilter, dispatch} = this.props;

        return (
            <div>
                <button disabled={visibilityFilter == "ALL"} onClick={() => dispatch(setVisibility("ALL"))}>All</button>
                <button disabled={visibilityFilter == "ACTIVE"} onClick={() => dispatch(setVisibility("ACTIVE"))}>ACTIVE</button>
                <button disabled={visibilityFilter == "COMPLETED"} onClick={() => dispatch(setVisibility("COMPLETED"))}>COMPLETED</button>
            </div>
        )
    }
}