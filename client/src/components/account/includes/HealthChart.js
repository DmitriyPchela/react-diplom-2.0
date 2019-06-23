import React, { useState, useEffect } from 'react';
import {healthStatusApi} from "../../../api";
import { Line } from "react-chartjs-2";

import LC from "local-storage";

const HealthChart = () => {
	const [data, setData] = useState({datasets: [], labels: []});
	
	const healthInit = () => {
		const login = LC.get('profile').login;
		
		healthStatusApi.listUser(login).then(res => {
			const date = res.data.data.map(item => {
				return item.date
			});
			
			const pressureUp = res.data.data.map(item => {
				return item.pressureUp
			});
			
			const pressureDown = res.data.data.map(item => {
				return item.pressureDown
			});
			
			const pulse = res.data.data.map(item => {
				return item.pulse
			});
			
			let chartData = {
				labels: date,
				datasets: [
					{
						label: "Верхнє тиск",
						fill: false,
						borderColor: 'rgb(255, 99, 132)',
						data: pressureUp,
					},
					{
						label: "Нижній тиск",
						fill: false,
						borderColor: 'blue',
						data: pressureDown,
					},
					{
						label: "Пульс",
						fill: false,
						borderColor: 'orange',
						data: pulse,
					},
				]
			};
			
			setData(chartData);
		});
	};
	
	 useEffect(() => {
		 healthInit();
	 }, []);
	
	return (
		data.labels.length > 0 &&
		<section className="section-health-chart">
			<div className="container">
				<h2 className="section-title">Графік стану здоров'я</h2>
				<Line data={data}/>
			</div>
		</section>
	);
};

export default HealthChart;