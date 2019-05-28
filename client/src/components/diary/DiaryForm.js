import React, { useState, useEffect } from 'react';
import { healthStatusApi, usersApi } from '../../api';

import InputText from "../common/formComponents/InputText";
import InputSelect from "../common/formComponents/InputSelect";
import InputArea from "../common/formComponents/InputArea";
import ModalSuccess from "./ModalSuccess";

const healthyOptions = [
	"Задовільне",
	"Слабкість",
	"Запаморочення",
	"Головний біль легка",
	"Головная біль",
	"Головная біль з приступами"
];

const initialData = {
	_id: null,
	date: '',
	time: new Date().toLocaleTimeString().replace("/.*({2}:{2}).*/", "$1"),
	pressureUp: '',
	pressureDown: '',
	pulse: '',
	healthy: 'default',
	comment: ''
};

const DiaryForm = props => {
	const [data, setData] = useState(initialData);
	const [errors, setErrors] = useState({});
	const [success, setSuccess] = useState(false);

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
			healthStatusApi.create(data).then(() => setData(initialData));
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
	};

	return (
		<form className="form-container row" onSubmit={handleSubmit}>
			<InputText
				type="date"
				name="date"
				label="Дата"
				error={errors.date}
				value={data.date}
				onChange={handleChange}
				className="col-12"
			/>
			<InputText
				type="text"
				name="time"
				label="Время"
				error={errors.time}
				value={data.time}
				onChange={handleChange}
				className="col-12"
			/>

			<InputText
				type="text"
				name="pressureUp"
				label="Верхній тиск"
				error={errors.pressureUp}
				value={data.pressureUp}
				onChange={handleChange}
				className="col-6"
			/>
			<InputText
				type="text"
				name="pressureDown"
				label="Нижній тиск"
				error={errors.pressureDown}
				value={data.pressureDown}
				onChange={handleChange}
				className="col-6"
			/>
			<InputText
				type="text"
				name="pulse"
				label="Пульс"
				error={errors.pulse}
				value={data.pulse}
				onChange={handleChange}
				className="col-12"
			/>
			<InputSelect
				name="healthy"
				label="Самопочуття"
				error={errors.healthy}
				value={data.healthy}
				options={healthyOptions}
				onChange={handleChange}
				className="col-12"
			/>
			<InputArea
				name="comment"
				label="Додаток"
				value={data.comment}
				onChange={handleChange}
				className="col-12"
			/>
			<div className="form-group col-12 d-flex justify-content-center">
				<button type="submit" className="btn-custom">Зберегти дані</button>
			</div>
			<ModalSuccess success={success} />
		</form>
	);
};

export default DiaryForm;