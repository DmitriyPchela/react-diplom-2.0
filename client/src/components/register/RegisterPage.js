import React, {useState} from 'react';
import {connect} from 'react-redux';
import { userAuthApi } from "../../api";

import {alertActions, userActions} from '../_actions';
import HeaderPage from "../_common/HeaderPage";
import RegisterForm from "./RegisterForm";
import {history} from "../_helpers";

const userData = {
	name: '',
	surname: '',
	login: '',
	password: '',
	email: '',
	phone: '',
};

const RegisterPage = props => {
	const [user, setUser] = useState(userData);
	const [isSubmit, setSubmit] = useState(false);
	
	const handleChange = (e) => {
		const {name, value} = e.target;
		setUser({...user, [name]: value})
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmit(true);
		if (user.name && user.surname && user.login && user.password  && user.email && user.phone) {
			console.log(user);
			userAuthApi.create(user);
		}
	};
	
	// history.listen((location, action) => {
	// 	props.dispatch(alertActions.clear());
	// });
	
	return (
		<main id="registration-page">
			<HeaderPage bgImage="images/about-bg.png" pageLink="/registration" pageName="Реєстрація"/>
			<section className="section-register">
				{
					props.alert.message &&
					<div className={`alert ${props.alert.type}`}>
						<button type="button" className="close" data-dismiss="alert" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						{props.alert.message}
					</div>
				}
				<RegisterForm user={user} isSubmit={isSubmit} onChange={handleChange} onSubmit={handleSubmit}/>
			</section>
		</main>
	);
};

function mapStateToProps(state) {
	const { alert } = state;
	const { registering } = state.registration;
	return {
		registering,
		alert
	};
}

export default connect(mapStateToProps)(RegisterPage);