import React from 'react';
import { render } from 'react-dom'
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

import store from "../src/store";
import App from './App';
import { ScrollWithRouter } from './helpers';
import './assets/styles/main.css';

render(
	<Provider store={store}>
		<BrowserRouter>
			<ScrollWithRouter>
				<App/>
			</ScrollWithRouter>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
