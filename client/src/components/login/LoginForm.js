import React, { useState } from 'react';
import {connect} from "react-redux";
import {toast, ToastContainer} from "react-toastify";
import {withRouter} from "react-router-dom";


import InputText from "../common/formComponents/InputText";
import {authApi} from "../../api";
import {setUserProfile} from "../../store/actions";

const userAuth = {
	login: '',
	password: '',
};

const LoginForm = ({propsLogin, ...props}) => {
	const [user, setUser] = useState(userAuth);
	const [errors, setErrors] = useState({});
	
	const validate = (data) => {
		const errors = {};
		if (!data.login) errors.login = "Поле логін обов'язкове";
		if (data.password.length < 6) errors.password = "Пароль має бути не менше 6 символів";
		
		return errors;
	};
	
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({...user, [name]:value})
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
		
		const errors = validate(user);
		setErrors(errors);
		
		if (Object.keys(errors).length === 0) {
			authApi.login(user).then(res => {
				if (res.data.status === 'success') {
					props.setUserProfile({
						login: res.data.data.profile.login,
						token: res.data.data.token,
						isAuthorized: res.data.data.isAuthorized,
						isAdmin: res.data.data.profile.isAdmin
					});
					propsLogin.history.push('/account');
				} else {
					toast.error(`⚠ ${res.data.message}`, {
						position: "top-right",
						autoClose: 2000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: false,
						draggable: true
					});
				}
			});
		}
	};
	
	return (
		<form name="form" onSubmit={handleSubmit} className="form-container">
			<ToastContainer/>
			<InputText
				type="text"
				name="login"
				label="Логін"
				error={errors.login}
				onChange={handleChange}
			/>
			<InputText
				type="password"
				name="password"
				label="Пароль"
				error={errors.password}
				onChange={handleChange}
			/>
			<div className="form-group">
				<button className="btn-custom">Увійти</button>
			</div>
		</form>
	);
};

const mapStateToProps = ({ profile }) => {
	return { profile };
};

export default connect(
	mapStateToProps, { setUserProfile }
)(LoginForm);
