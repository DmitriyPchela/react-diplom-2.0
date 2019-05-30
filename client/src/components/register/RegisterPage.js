import React, { useState } from 'react';

import HeaderPage from "../common/HeaderPage";
import RegisterForm from "./RegisterForm";
import ModalSuccess from "../diary/ModalSuccess";

import { usersApi } from "../../api";

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
	const [errors, setErrors] = useState({});
	const [success, setSuccess] = useState(false);
	
	const validate = (data) => {
		const errors = {};
		if (!data.login) errors.login = "Поле логін обов'язкове";
		if (!data.password || data.password.length < 6) errors.password = "Поле пароль обов'язкове";
		if (!data.email) errors.email = "Поле email обов'язкове";
		if (!data.phone) errors.phone = "Поле телефон обов'язкове";
		
		return errors;
	};
	
	const handleChange = (e) => {
		const {name, value} = e.target;
		setUser({...user, [name]: value})
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
		
		const errors = validate(user);
		setErrors(errors);
		if (Object.keys(errors).length === 0) {
			usersApi.create(user).then(res => {
				setSuccess(true);
			});
		}
	};

	return (
		<main id="registration-page">
			<HeaderPage bgImage="images/about-bg.png" pageLink="/registration" pageName="Реєстрація"/>
			<section className="section-register">
				<RegisterForm errors={errors} onChange={handleChange} onSubmit={handleSubmit}/>
			</section>
			{/*<ModalSuccess success={success} />*/}
		</main>
	);
};
export default RegisterPage;