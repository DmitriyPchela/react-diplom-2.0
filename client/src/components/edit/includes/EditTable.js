import React, { useState, useEffect } from 'react';
import LC from "local-storage";
import {healthStatusApi, usersApi} from "../../../api";
import InputText from "../../common/formComponents/InputText";
import InputSelect from "../../common/formComponents/InputSelect";

const initialData = {
	date: '',
	time: new Date().toLocaleTimeString().replace("/.*({2}:{2}).*/", "$1"),
	pressureUp: 0,
	pressureDown:  0,
	pulse:  0,
	healthy: 'default'
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
	const [healthData, setHealthData] = useState(initialData);
	const [newHealthData, setNewHealthData] = useState(initialData);
	const [success, setSuccess] = useState(false);
	
	useEffect(() => {
		if (LC.get('profile') != null) {
			const userId = LC.get('profile').login;
			
			healthStatusApi.listUser({login: userId}).then(res => {
				setHealthData(res.data.data);
				setNewHealthData(res.data.data);
			});
		}
		
	}, []);
	
	const handleChange = (key) => (e) => {
		const { name, value } = e.target;
		newHealthData[key][name] = value;
		setNewHealthData([...newHealthData]);
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
		// const errors = validate(data.newUser);
		// setErrors(errors);
		// if (Object.keys(errors).length === 0) {
		//
		// }
		let changed = false;
		if (JSON.stringify(newHealthData) !== JSON.stringify(healthData)) {
			changed = true
		}
		console.log(JSON.stringify(newHealthData));
		console.log(JSON.stringify(healthData));
		
		
		changed && healthStatusApi.update(newHealthData._id, newHealthData).then((res) => {
			if (res.data.status === 'success') {
				console.log(res);
				// setSuccess(true);
			}
		});
	};
	
	// console.log(newHealthData);
	
	return (
		<section className="section-health-table">
			<div className="container">
				<h2 className="section-title">Дані здоров'я</h2>
				<form className="form-container" onSubmit={handleSubmit}>
					<table className="table table-bordered table-hover ">
						<thead>
						<tr>
							<th scope="col" rowSpan="2">Дата</th>
							<th scope="col" rowSpan="2">Час</th>
							<th scope="col" colSpan="2">Тиск</th>
							<th scope="col" rowSpan="2">Пульс</th>
							<th scope="col" rowSpan="2">Самопочуття</th>
						</tr>
						<tr>
							<th>Верхнє</th>
							<th>Нижче</th>
						</tr>
						</thead>
						<tbody>
						{
							healthData.length > 0 && healthData.map((item, index) => {
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
		</section>
	);
};

export default EditTable;
