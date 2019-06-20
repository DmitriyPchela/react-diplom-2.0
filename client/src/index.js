import React from 'react';
import { render } from 'react-dom'
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

import store from "../src/store";
import App from './App';
import './assets/styles/main.css';

render(
	<Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);