import React, { useState, useEffect } from 'react';
import { healthStatusApi } from '../../api';

import InputText from "../_common/formComponents/InputText";
import InputSelect from "../_common/formComponents/InputSelect";
import InputArea from "../_common/formComponents/InputArea";
import ModalSuccess from "./ModalSuccess";
import { userActions } from "../_actions";
import { connect } from "react-redux";

const healthyOptions = [
	"Задовільне",
	"Слабкість",
	"Запаморочення",
	"Головний біль легка",
	"Головная біль",
	"Головная біль з приступами"
];

const DiaryForm = props => {
	const initialData = {
		_id: props.user.id ? props.user.id : null,
		date: '',
		time: new Date().toLocaleTimeString().replace("/.*(\d{2}:\d{2}).*/", "$1"),
		pressureUp: '',
		pressureDown: '',
		pulse: '',
		healthy: 'default',
		comment: ''
	};

	const [data, setData] = useState(initialData);
	const [errors, setErrors] = useState({});
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		props.dispatch(userActions.getAll());
	}, []);

	const putDataToDB = dataDB => {
		healthStatusApi.create(dataDB);
	};

	const validate = (data) => {
		const errors = {};
		if (!data.date) errors.date = "Поле дата обов'язкове";
		if (!data.time) errors.time = "Поле время обов'язкове";
		if (!data.pressureUp) errors.pressureUp = "Поле верхній тиск обов'язкове";
		if (!data.pressureDown) errors.pressureDown = "Поле нижній тиск обов'язкове";
		if (!data.pulse) errors.pulse = "Поле пульс обов'язкове";
		if (!data.healthy) errors.healthy = "Поле самопочуття обов'язкове";

		return errors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const errors = validate(data);
		setErrors(errors);
		if (Object.keys(errors).length === 0) {
			setSuccess(true);
			putDataToDB(data);
			setData(initialData);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
	};

	return (
		<form className="form-container row" onSubmit={handleSubmit}>
			<InputText type="date" name="date" label="Дата" error={errors.date} value={data.date} className="col-12" onChange={handleChange} />
			<InputText type="text" name="time" label="Время" error={errors.time} value={data.time} className="col-12" onChange={handleChange} />

			<InputText type="text" name="pressureUp" label="Верхній тиск" error={errors.pressureUp} value={data.pressureUp} className="col-6" onChange={handleChange} />
			<InputText type="text" name="pressureDown" label="Нижній тиск" error={errors.pressureDown} value={data.pressureDown} className="col-6" onChange={handleChange} />

			<InputText type="text" name="pulse" label="Пульс" className="col-12" error={errors.pulse} value={data.pulse} onChange={handleChange} />
			<InputSelect name="healthy" label="Самопочуття" className="col-12" error={errors.healthy} value={data.healthy} options={healthyOptions} onChange={handleChange} />

			<InputArea name="comment" label="Додаток" className="col-12" value={data.comment} onChange={handleChange} />
			<div className="form-group col-12 d-flex justify-content-center">
				<button type="submit" className="btn-custom">Зберегти дані</button>
			</div>

			<ModalSuccess success={success} />
		</form>
	);
};

function mapStateToProps(state) {
	const { authentication } = state;
	const { user } = authentication;
	return {
		user
	};
}

export default connect(mapStateToProps)(DiaryForm);
