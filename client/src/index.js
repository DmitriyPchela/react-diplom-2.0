import React from 'react';
import { render } from 'react-dom';
import Provider from "react-redux/es/components/Provider";
import { BrowserRouter as Router } from 'react-router-dom';

import store from "../src/store";
import './assets/styles/main.css';
import App from './components/App';

render(
	<Provider store={store}>
		<Router>
			<App/>
		</Router>
	</Provider>,
	document.getElementById('root')
);