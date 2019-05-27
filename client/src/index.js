import React from 'react';
import {render} from 'react-dom';
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { history } from './components/_helpers';
import { store } from './components/_helpers';
import { configureFakeBackend } from './components/_helpers';
import './styles/main.css';
import App from './components/App';

configureFakeBackend();

render(
	<Provider store={store}>
		<Router history={history}>
			<App/>
		</Router>
	</Provider>,
	document.getElementById('root')
);