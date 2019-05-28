import React from 'react';
import InputText from "../common/formComponents/InputText";

const LoginForm = ({errors, onChange, onSubmit}) => {
	return (
		<form name="form" onSubmit={onSubmit} className="form-container">
			<InputText
				type="text"
				name="login"
				label="Логін"
				error={errors.login}
				onChange={onChange}
			/>
			<InputText
				type="password"
				name="password"
				label="Пароль"
				error={errors.password}
				onChange={onChange}
			/>
			<div className="form-group">
				<button className="btn-custom">Увійти</button>
			</div>
		</form>
	);
};

export default LoginForm;
