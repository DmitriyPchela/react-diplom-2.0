import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/main.css';
import App from './components/App';

render(
	<Router>
		<App/>
	</Router>,
	document.getElementById('root')
);