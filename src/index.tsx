import React = require('react');
import ReactDOM = require('react-dom');
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers'

import App from './components/App';

let store = createStore(todoApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('example')
)

// import { addTodo, toggleTodo, setVisibilityFilter } from './actions';

// console.log(store.getState());

// let unsubscribe = store.subscribe(() =>
//     console.log(store.getState())
// )

// store.dispatch(addTodo('Learn about actions'))
// store.dispatch(addTodo('Learn about reducers'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter("SHOW_COMPLETED"))

// unsubscribe();