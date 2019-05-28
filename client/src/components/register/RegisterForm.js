import React from 'react';
import InputText from "../common/formComponents/InputText";
import InputMask from "react-input-mask";


const RegisterForm = ({errors, onChange, onSubmit}) => {
	
	return (
		<form name="form" onSubmit={onSubmit} className="form-container">
			<InputText
				type="text"
				name="name"
				label="Ім'я"
				onChange={onChange}
			/>
			<InputText
				type="text"
				name="surname"
				label="Прізвище"
				onChange={onChange}
			/>
			<InputText
				type="text"
				name="login"
				label="Логін"
				error={errors.login}
				onChange={onChange}
			/>
			<InputText
				type="email"
				name="email"
				label="E-mail"
				error={errors.email}
				onChange={onChange}
			/>
			<div className="form-group">
				<label htmlFor="phone">Номер телефону</label>
				<InputMask
					mask="+38 (099) 999-99-99"
					type="text"
					name="phone"
					label="Номер телефону"
					onChange={onChange}
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
				error={errors.password}
				onChange={onChange}
				small="Мінімальний розмір паролю: 6 символів"
			/>
			<div className="form-group">
				<button className="btn-custom">Зареєструватися</button>
			</div>
		</form>
	);
};

export default RegisterForm;
