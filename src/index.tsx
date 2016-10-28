import React = require('react');
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { App } from './components';

render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.querySelector('#app')
)


if ((module as any).hot) {
    (module as any).hot.accept(
        './components',
        () => render(
            <AppContainer>
                <App />
            </AppContainer>,
            document.querySelector('#app')
        ))
}