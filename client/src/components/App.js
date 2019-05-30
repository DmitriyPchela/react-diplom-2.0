import React, { useEffect } from 'react';
import { Route, Switch } from "react-router-dom"
import { connect }from 'react-redux';
import LC from "local-storage";

import { authApi } from '../api';
import { setUserProfile } from "../store/actions";
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

const App = props => {
	useEffect(() => {
		(async function () {
			if (LC.get('profile') !== null) {
				let login = LC.get('profile').login;
				let token = LC.get('profile').token;

				const res = await authApi.isAuthorized({
					login: login,
					token: token
				});

				if (res.data.status === 'success') {
					props.setUserProfile({
						login: res.data.data.profile.login,
						token: res.data.data.profile.token,
						isAuthorized: res.data.data.isAuthorized
					});
				}
			}
		})();

	}, []);

	return (
		<>
			<NavHeader isAuthorized={props.isAuth} />
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

function mapStateToProps({ profile }) {
	return {
		isAuth: profile.isAuthorized
	};
}


export default connect(mapStateToProps,  { setUserProfile })(App);