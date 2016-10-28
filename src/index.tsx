import React = require('react');
import ReactDOM = require('react-dom');
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { todoApp } from './reducers';

let store = createStore(todoApp);
let elem = document.querySelector('#app');

function updateRender() {
    const App = require('./components').App;

    return ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App />
            </Provider>
        </AppContainer>,
        elem
    )
}

updateRender();

if ((module as any).hot) {
    (module as any).hot.accept(
        './components',
        () => updateRender())
}