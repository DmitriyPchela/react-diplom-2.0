import React from 'react';
import InputText from "../_common/formComponents/InputText";

const LoginForm = ({username, password, isSubmit, onChange, onSubmit}) => {
	return (
		<form name="form" onSubmit={onSubmit} className="form-container">
			<InputText type="text" name="username" label="Логін" error={isSubmit && !username} value={username} onChange={onChange}/>
			<InputText type="password" name="password" label="Пароль" error={isSubmit && !password} value={password} onChange={onChange}/>
			<div className="form-group">
				<button className="btn-custom">Увійти</button>
			</div>
		</form>
	);
};

export default LoginForm;
