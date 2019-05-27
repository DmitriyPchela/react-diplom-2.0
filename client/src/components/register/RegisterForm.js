import React from 'react';
import InputText from "../_common/formComponents/InputText";
import InputMask from "react-input-mask";


const RegisterForm = ({user, isSubmit, onChange, onSubmit}) => {
	
	return (
		<form name="form" onSubmit={onSubmit} className="form-container">
			<InputText type="text" name="name" label="Ім'я" error={isSubmit && !user.firstName} value={user.firstName} onChange={onChange}/>
			<InputText type="text" name="surname" label="Прізвище" error={isSubmit && !user.lastName} value={user.lastName} onChange={onChange}/>
			<InputText type="text" name="login" label="Логін" error={isSubmit && !user.username} value={user.username} onChange={onChange}/>
			<InputText type="email" name="email" label="E-mail" error={isSubmit && !user.email} value={user.email} onChange={onChange}/>
			<div className="form-group">
				<label htmlFor="phone">Номер телефону</label>
				<InputMask
					mask="+38 (099) 999-99-99"
					type="text"
					name="phone"
					label="Номер телефону"
					className="form-control"
					value={user.phone}
					onChange={onChange}/>
				{isSubmit && !user.phone && <div className="help-block">Номер телефону обов'язкове поле</div>}
				<small className="text-muted">
					Номер телефону повинен бути в форматі +38 (0xx) xxx-xx-xx
				</small>
			</div>
			<InputText
				type="password"
				name="password"
				label="Пароль"
				error={isSubmit && !user.password && user.password.length < 6}
				value={user.password}
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
