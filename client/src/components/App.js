import React from 'react';
import {Route, Switch} from "react-router-dom"

import HomePage from './home/HomePage'
import AboutPage from './about/AboutPage'
import ContactPage from './contact/ContactPage'
import NewsPage from './news/NewsPage'
import DiaryPage from './diary/DiaryPage'
import NavHeader from "./_common/NavHeader";
import Footer from "./_common/Footer";
import RegisterPage from "./register/RegisterPage";
import Login from "./login/LoginPage";
import Account from "./account/AccountPage";


const App = props => {
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