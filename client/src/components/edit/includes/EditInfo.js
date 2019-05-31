import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import InputText from "../../common/formComponents/InputText";
import { usersApi, healthStatusApi } from "../../../api";
import InputMask from "react-input-mask";
import LC from "local-storage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const userData = {
	name: '',
	surname: '',
	login: '',
	password: '',
	passwordNew: '',
	email: '',
	phone: '',
};

const EditInfo = () => {
	const [data, setData] = useState({user: userData, newUser: userData});
	const [errors, setErrors] = useState({});
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		if (LC.get('profile') != null) {
			const userToken = LC.get('profile').token;

			usersApi.listLogged({token: userToken}).then(res => {
				setData({ ...data, user: res.data.data, newUser: res.data.data });
			});
		}

	}, []);

	const validate = (data) => {
		const errors = {};
		if (!data.login) errors.login = "Поле логін обов'язкове";
		if (!data.password || data.password.length < 6) errors.password = "Поле пароль обов'язкове";
		if (!data.email) errors.email = "Поле email обов'язкове";
		if (!data.phone) errors.phone = "Поле телефон обов'язкове";

		return errors;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({...data, newUser: { ...data.newUser, [name]: value }});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const errors = validate(data.newUser);
		setErrors(errors);
		if (Object.keys(errors).length === 0) {
			let changed = false;

			Object.keys(data.newUser).map(key => {
				if (data.newUser[key] !== data.user[key]) {
					changed = true;
				}
			});

			changed && usersApi.update(data._id, data.newUser).then((res) => {
				if (res.data.status === 'success') {
					setSuccess(true);
				}
			});
		}
	};

	console.log(success);

	return (
		<section className="section-edit-info">
			<div className="container">
				{
					success ? (
						<div className="alert alert-success alert-dismissible fade show" role="alert">
							<p>Ваші дані збережено! <br/> Перейти до <Link to="/account">особистого кабінету</Link></p>
							<button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setSuccess(false)}>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
					) : ''
				}
				<div className="link-back">
					<Link to="/account">
						<i className="fas fa-arrow-left"/>
						Повернутись назад
					</Link>
				</div>
				<h2 className="section-title">Особисті дані</h2>
				<form className="form-container" onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-6">
							<InputText
								type="text"
								name="name"
								label="Ім'я"
								value={data.newUser.name}
								error={errors.name}
								onChange={handleChange}
							/>
							<InputText
								type="text"
								name="surname"
								label="Прізвище"
								value={data.newUser.surname}
								onChange={handleChange}
							/>
							<InputText
								type="text"
								name="login"
								label="Логін"
								value={data.newUser.login}
								error={errors.login}
								onChange={handleChange}
							/>
						</div>
						<div className="col-6">
							<InputText
								type="email"
								name="email"
								label="E-mail"
								value={data.newUser.email}
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
									value={data.newUser.phone}
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
								label="Дійсний пароль"
								value={data.newUser.password}
								error={errors.password}
								onChange={handleChange}
							/>
							<InputText
								type="password"
								name="passwordNew"
								label="Новий пароль"
								error={errors.passwordNew}
								onChange={handleChange}
								small="Мінімальний розмір паролю: 6 символів"
							/>
						</div>
						<div className="col-12 d-flex justify-content-center">
							<button type="submit" className="btn-custom">Зберегти</button>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default EditInfo;