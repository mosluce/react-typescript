import React = require('react');

const {Component} = React;

export interface FooterProperties {
    onFilterChange(filter: TodoApp.VisibilityFilter);
    filter: string
}

export class Footer extends Component<FooterProperties, {}> {
    renderFilter(filter: TodoApp.VisibilityFilter, name: string): any {
        if (filter === this.props.filter) {
            return name;
        }

        return (
            <a href='#' onClick={e => {
                e.preventDefault();
                this.props.onFilterChange(filter);
            } }>
                {name}
            </a>
        )
    }

    render() {
        return (
            <p>
                Show:{' '}
                {this.renderFilter('SHOW_ALL', 'All')}
                {', '}
                {this.renderFilter('SHOW_COMPLETED', 'Completed')}
                {', '}
                {this.renderFilter('SHOW_ACTIVE', 'Active')}
                .
            </p>
        );
    }
}