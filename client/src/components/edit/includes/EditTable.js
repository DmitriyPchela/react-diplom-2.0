import React, { useState, useEffect } from 'react';
import LC from "local-storage";
import {healthStatusApi} from "../../../api";
import InputText from "../../common/formComponents/InputText";
import InputSelect from "../../common/formComponents/InputSelect";

const initialData = {
	date: '',
	time: new Date().toLocaleTimeString().replace("/.*({2}:{2}).*/", "$1"),
	pressureUp: '',
	pressureDown: '',
	pulse: '',
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
	const [newHealthData, setNewHealthData] = useState([]);
	
	useEffect(() => {
		if (LC.get('profile') != null) {
			const userId = LC.get('profile').login;
			
			healthStatusApi.listUser({login: userId}).then(res => {
				setHealthData(res.data.data);
				// setNewHealthData(res.data.data);
			});
		}
		
	}, []);
	
	const handleChange = (e) => {
		const { name, value } = e.target;
		newHealthData.map((item, index) => {
			console.log(item);
			console.log(index);
			// setNewHealthData({})
		})
		
	};
	
	// console.log(healthData);
	console.log(newHealthData);
	
	return (
		<section className="section-health-table">
			<div className="container">
				<h2 className="section-title">Дані здоров'я</h2>
				<form className="form-container">
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
							healthData.length > 0 && healthData.map(item => {
								return <tr key={item._id}>
									<td>
										<InputText
											type="date"
											name="date"
											label="Дата"
											value={item.date}
											onChange={handleChange}
										/>
									</td>
									<td>
										<InputText
											type="text"
											name="time"
											label="Время"
											value={item.time}
											onChange={handleChange}
										/>
									</td>
									<td>
										<InputText
											type="number"
											name="pressureUp"
											label="Верхній тиск"
											value={item.pressureUp}
											minVal={50}
											onChange={handleChange}
										/>
									</td>
									<td>
										<InputText
											type="number"
											name="pressureDown"
											label="Нижній тиск"
											value={item.pressureDown}
											minVal={50}
											onChange={handleChange}
										/>
									</td>
									<td>
										<InputText
											type="number"
											name="pulse"
											label="Пульс"
											value={item.pulse}
											minVal={0}
											onChange={handleChange}
										/>
									</td>
									<td>
										<InputSelect
											name="healthy"
											label="Самопочуття"
											value={item.healthy}
											options={healthyOptions}
											onChange={handleChange}
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
