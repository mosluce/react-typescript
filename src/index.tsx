import React = require('react');
import ReactDOM = require('react-dom');
import { AppContainer } from 'react-hot-loader';

let elem = document.querySelector('#app');

function updateRender() {
    const App = require('./components').App;

    return ReactDOM.render(
        <AppContainer>
            <App />
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