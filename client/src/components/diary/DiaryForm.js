import React, { useState, useEffect } from 'react';
import LC from "local-storage";

import { healthStatusApi } from '../../api';
import InputText from "../common/formComponents/InputText";
import InputSelect from "../common/formComponents/InputSelect";
import InputArea from "../common/formComponents/InputArea";
import ModalSuccess from "../common/ModalSuccess";

const healthyOptions = [
	"Задовільне",
	"Слабкість",
	"Запаморочення",
	"Головний біль легка",
	"Головная біль",
	"Головная біль з приступами"
];

const initialData = {
	date: '',
	time: new Date().toLocaleTimeString().replace("/.*({2}:{2}).*/", "$1"),
	pressureUp: '',
	pressureDown: '',
	pulse: '',
	healthy: 'default',
	comment: '',
	userID: ''
};

const DiaryForm = props => {
	const [data, setData] = useState(initialData);
	const [errors, setErrors] = useState({});
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		if (LC.get('profile') != null) {
			setData({...data, userID: LC.get('profile').login});
		}
	}, []);

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

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
		
		const errors = validate(data);
		setErrors(errors);
		if (Object.keys(errors).length === 0) {
			healthStatusApi.create(data).then(res => {
				if (res.data.status === 'success') {
					setSuccess(true);
					return setData(initialData);
				}
			});
		}
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
				type="number"
				name="pressureUp"
				label="Верхній тиск"
				error={errors.pressureUp}
				value={data.pressureUp}
				minVal={50}
				onChange={handleChange}
				className="col-6"
			/>
			<InputText
				type="number"
				name="pressureDown"
				label="Нижній тиск"
				error={errors.pressureDown}
				value={data.pressureDown}
				minVal={50}
				onChange={handleChange}
				className="col-6"
			/>
			<InputText
				type="number"
				name="pulse"
				label="Пульс"
				error={errors.pulse}
				value={data.pulse}
				minVal={0}
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
			{
				success && <ModalSuccess
					title={'Ваші дані збережно!'}
					desc={`Їх можно переглянути у особистому кабінеті!`}
					success={success ?  success : !success}
				/>
			}
		</form>
	);
};

export default DiaryForm;