import React, { useState, useEffect } from 'react';
import LC from "local-storage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { healthStatusApi } from "../../../api";
import InputText from "../../common/formComponents/InputText";
import InputSelect from "../../common/formComponents/InputSelect";
import { ask, ModalAsk } from "../../common/ModalAsk";

const initialData = {
	date: '',
	time: new Date().toLocaleTimeString().replace("/.*({2}:{2}).*/", "$1"),
	pressureUp: '',
	pressureDown: '',
	pulse: '',
	healthy: 'default',
	comment: ''
};

const healthyOptions = [
	"Задовільне",
	"Слабкість",
	"Запаморочення",
	"Головний біль легка",
	"Головная біль",
	"Головная біль з приступами"
];

const EditTable = () => {
	const [data, setData] = useState({ healthData: initialData, newHealthData: initialData });
	
	useEffect(() => {
		if (LC.get('profile') != null) {
			const userId = LC.get('profile').login;
			
			healthStatusApi.listUser({login: userId}).then(res => {
				setData(prev => ({
					...prev,
					healthData: res.data.data,
					newHealthData: res.data.data
				}));
			});
		}
	}, []);

	const handleChange = (key) => (e) => {
		const { name, value } = e.target;
		data.newHealthData[key][name] = value;

		setData(prev => ({
			...prev,
			newHealthData: [...data.newHealthData]
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		healthStatusApi.update(data.newHealthData._id, data.newHealthData).then(res => {
			if (res.data.status === 'success') {
				toast.success('Дані збережено!', {
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true
				});
			}
		});
	};

	const handleDelete = (item, indexDel) => {
		ask({
			callback: (answer) => {
				if (answer) {
					let newArr = [];
					healthStatusApi.delete(item._id).then(res => {
						if (res.data.status === 'success') {
							data.healthData.splice(indexDel, 1);
							newArr = data.healthData;
							setData(prev => ({
								...prev,
								healthData: [...newArr]
							}));
						}
					});
				}
			},
			title: 'Видалити дані?'
		})
	};
	
	return (
		<section className="section-health-table">
			<div className="container">
				<ToastContainer
					position="top-right"
					autoClose={2000}
					hideProgressBar
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnVisibilityChange={false}
					draggable
					pauseOnHover={false}
				/>
				<h2 className="section-title">Дані здоров'я</h2>
				<form className="form-container" onSubmit={handleSubmit}>
					<table className="table table-bordered">
						<thead>
						<tr>
							<th scope="col" rowSpan="2">Дата</th>
							<th scope="col" rowSpan="2">Час</th>
							<th scope="col" colSpan="2">Тиск</th>
							<th scope="col" rowSpan="2">Пульс</th>
							<th scope="col" rowSpan="2">Самопочуття</th>
							<th scope="col" rowSpan="2">Видалити</th>
						</tr>
						<tr>
							<th>Верхнє</th>
							<th>Нижче</th>
						</tr>
						</thead>
						<tbody>
						{
							data.healthData.length > 0 && data.healthData.map((item, index) => {
								return <tr key={item._id}>
									<td>
										<InputText
											type="date"
											name="date"
											label="Дата"
											value={item.date}
											onChange={handleChange(index)}
										/>
									</td>
									<td>
										<InputText
											type="text"
											name="time"
											label="Время"
											value={item.time}
											onChange={handleChange(index)}
										/>
									</td>
									<td>
										<InputText
											type="number"
											name="pressureUp"
											label="Верхній тиск"
											value={item.pressureUp}
											minVal={50}
											onChange={handleChange(index)}
										/>
									</td>
									<td>
										<InputText
											type="number"
											name="pressureDown"
											label="Нижній тиск"
											value={item.pressureDown}
											minVal={50}
											onChange={handleChange(index)}
										/>
									</td>
									<td>
										<InputText
											type="number"
											name="pulse"
											label="Пульс"
											value={item.pulse}
											minVal={0}
											onChange={handleChange(index)}
										/>
									</td>
									<td>
										<InputSelect
											name="healthy"
											label="Самопочуття"
											value={item.healthy}
											options={healthyOptions}
											onChange={handleChange(index)}
										/>
									</td>
									<td>
										<button type="button" className="btn-delete" onClick={() => handleDelete(item, index)}>
											<i className="fas fa-trash-alt"/>
										</button>
									</td>
								</tr>
							})
						}
						</tbody>
					</table>
					<div className="btn-row">
						<button type="submit" className="btn-custom">Зберегти</button>
					</div>
				</form>
			</div>
			<ModalAsk/>
		</section>
	);
};

export default EditTable;