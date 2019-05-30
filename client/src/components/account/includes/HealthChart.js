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

		let chartData = {
			labels: date,
			datasets: [
				{
					label: "My First dataset",
					fill: false,
					borderColor: 'rgb(255, 99, 132)',
					data: pressureUp,
				},
				{
					label: "My Second dataset",
					fill: false,
					borderColor: 'blue',
					data: pressureDown,
				},
			]
		};

		setData(chartData);
	}, [healthData]);

	console.log(data.labels);

	return (
		<section className="section-health-chart">
			<div className="container">
				<h2 className="section-title">Графики изменений*</h2>
				{
					data.labels !== false ? <Line data={data}/> : ''
				}
			</div>
		</section>
	);
};

export default HealthChart;