import React, { useState } from 'react';
import InputText from "../common/formComponents/InputText";
import InputMask from "react-input-mask";
import {usersApi} from "../../api";
import { show, ModalSuccess } from "../common/ModalSuccess";

const userData = {
	name: '',
	surname: '',
	login: '',
	password: '',
	email: '',
	phone: '',
};

const RegisterForm = props => {
	const [user, setUser] = useState(userData);
	const [errors, setErrors] = useState({});
	
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
			usersApi.create(user).then((res) => {
				if (res.data.status === 'success') {
					show({
						title: 'Реєстрація пройшла успішно!',
						desc: 'Можете перейти до авторизації'
					});
					return setUser(userData);
				}
			});
		}
	};
	
	return (
		<form name="form" onSubmit={handleSubmit} className="form-container">
			<InputText
				type="text"
				name="name"
				label="Ім'я"
				value={user.name}
				onChange={handleChange}
			/>
			<InputText
				type="text"
				name="surname"
				label="Прізвище"
				value={user.surname}
				onChange={handleChange}
			/>
			<InputText
				type="text"
				name="login"
				label="Логін"
				value={user.login}
				error={errors.login}
				onChange={handleChange}
			/>
			<InputText
				type="email"
				name="email"
				label="E-mail"
				value={user.email}
				error={errors.email}
				onChange={handleChange}
			/>
			<div className="form-group">
				<label htmlFor="phone">Номер телефону</label>
				<InputMask
					mask="+38 (099) 999-99-99"
					type="text"
					name="phone"
					label="Номер телефону"
					value={user.phone}
					onChange={handleChange}
					className="form-control"
				/>
				<small className="text-muted">
					Номер телефону повинен бути в форматі +38 (0xx) xxx-xx-xx
				</small>
			</div>
			<InputText
				type="password"
				name="password"
				label="Пароль"
				value={user.password}
				error={errors.password}
				onChange={handleChange}
				small="Мінімальний розмір паролю: 6 символів"
			/>
			<div className="form-group">
				<button className="btn-custom">Зареєструватися</button>
			</div>
			<ModalSuccess/>
		</form>
	);
};

export default RegisterForm;
