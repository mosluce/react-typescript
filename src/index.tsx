import React = require('react');
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { App } from './components/App';

render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.querySelector('#app')
)