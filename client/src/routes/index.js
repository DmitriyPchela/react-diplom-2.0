import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../components/home/HomePage'
import AboutPage from '../components/about/AboutPage'
import ContactPage from '../components/contact/ContactPage'
import NewsPage from '../components/news/NewsPage'
import DiaryPage from '../components/diary/DiaryPage'
import RegisterPage from "../components/register/RegisterPage";
import Login from "../components/login/LoginPage";
import Account from "../components/account/AccountPage";
import Edit from "../components/edit/EditPage";
import userHealthInfo from "../components/user/UserHealthPage";
import {PrivateRoute} from "../components/common/hoc/PrivateRoute";

export default () => (
    <Switch>
        <Route ignoreScrollBehavior exact path="/" component={HomePage}/>
        <Route ignoreScrollBehavior path="/about" component={AboutPage}/>
        <Route ignoreScrollBehavior path="/contacts" component={ContactPage}/>
        <Route path="/news" component={NewsPage}/>
        <Route path="/services" component={DiaryPage}/>
        <Route path="/registration" component={RegisterPage}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/account" component={Account}/>
        <PrivateRoute path="/edit" component={Edit}/>
        <PrivateRoute path="/user/:id" component={userHealthInfo}/>
    </Switch>
)
