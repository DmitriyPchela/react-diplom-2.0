import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const HealthChart = ({healthData}) => {
	const [data, setData] = useState({});

	useEffect(() => {
		const date = healthData.length > 0 && healthData.map(item => {
			return item.date
		});
		const pressureUp = healthData.length > 0 && healthData.map(item => {
			return item.pressureUp
		});
		const pressureDown = healthData.length > 0 && healthData.map(item => {
			return item.pressureDown
		});
		const pulse = healthData.length > 0 && healthData.map(item => {
			return item.pulse
		});

		let chartData = {
			labels: date,
			datasets: [
				{
					label: "Верхнее давление",
					fill: false,
					borderColor: 'rgb(255, 99, 132)',
					data: pressureUp,
				},
				{
					label: "Нижнее давление",
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
	}, [healthData]);

	return (
		<section className="section-health-chart">
			<div className="container">
				<h2 className="section-title">Графік стану здовров'я</h2>
				{
					data.labels !== false ? <Line data={data}/> : ''
				}
			</div>
		</section>
	);
};

export default HealthChart;