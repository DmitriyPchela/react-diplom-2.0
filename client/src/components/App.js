import React, { useState, useEffect } from 'react';
import {Route, Switch, Redirect} from "react-router-dom"
import LC from "local-storage";


import HomePage from './home/HomePage'
import AboutPage from './about/AboutPage'
import ContactPage from './contact/ContactPage'
import NewsPage from './news/NewsPage'
import DiaryPage from './diary/DiaryPage'
import NavHeader from "./common/NavHeader";
import Footer from "./common/Footer";
import RegisterPage from "./register/RegisterPage";
import Login from "./login/LoginPage";
import Account from "./account/AccountPage";
import { authApi } from '../api';

const App = props => {
	
	useEffect(() => {
		// (async function () {
		// 	let profile = LC.get('profile');
		// 	let token = LC.get('token');
		//
		// 	if (!profile) { return }
		// 	profile = JSON.parse(profile);
		//
		// 	const response = await authApi.isAuthorized({
		// 		login: profile.login,
		// 		token: token && JSON.parse(token)
		// 	});
		// 	console.log(response);
		// })();
	}, []);
	
	return (
		<>
			<NavHeader/>
			<Switch>
				<Route exact path="/" component={HomePage}/>
				<Route path="/about" component={AboutPage}/>
				<Route path="/contacts" component={ContactPage}/>
				<Route path="/news" component={NewsPage}/>
				<Route path="/services" component={DiaryPage}/>
				<Route path="/registration" component={RegisterPage}/>
				<Route path="/login" component={Login}/>
				<Route path="/account" component={Account}/>
			</Switch>
			<Footer/>
		</>

	);
};

export default App;