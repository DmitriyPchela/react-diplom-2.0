import React, { useState, useEffect } from 'react';

const HealthChart = ({ healthData }) => {
	const [data, setData] = useState({});


	// getUserHealth = (data) => {
	// 	this.setState(data.filter(item => {
	// 		return item.userID ===  && item;
	// 	}));
	// };

	// apiHealthSuccess = (data) => {
	// 	this.getUserHealth(data);
	// };

	 useEffect(() => {

	 	setData(healthData)
		 // this.setState({...healthData, apiHealthCall.data.data)
		 // apiHealthCall.statusText === 'OK' ? this.apiHealthSuccess(apiHealthCall.data.data) : alert(apiHealthCall.statusText);

		 // const date = this.state.healthData.length > 0 && this.state.healthData.map(item => {
		 // 	return item.date
		 // });
		 //
		 // const pressureUp = this.state.healthData.length > 0 && this.state.healthData.map(item => {
		 // 	return item.pressureUp
		 // });
		 //
		 // const pressureDown = this.state.healthData.length > 0 && this.state.healthData.map(item => {
		 // 	return item.pressureDown
		 // });
		 //
		 // const pulse = this.state.healthData.length > 0 && this.state.healthData.map(item => {
		 // 	return item.pulse
		 // });
		 //
		 // let chartData = {
		 // 	labels: date,
		 // 	datasets: [
		 // 		{
		 // 			label: "Верхнє тиск",
		 // 			fill: false,
		 // 			borderColor: 'rgb(255, 99, 132)',
		 // 			data: pressureUp,
		 // 		},
		 // 		{
		 // 			label: "Нижній тиск",
		 // 			fill: false,
		 // 			borderColor: 'blue',
		 // 			data: pressureDown,
		 // 		},
		 // 		{
		 // 			label: "Пульс",
		 // 			fill: false,
		 // 			borderColor: 'orange',
		 // 			data: pulse,
		 // 		},
		 // 	]
		 // };
		 //
		 // this.setState({...data, chartData});
	 });

	console.log('data', data);

	return (
		// data.labels !== false &&
		<section className="section-health-chart">
			<div className="container">
				<h2 className="section-title">Графік стану здоров'я</h2>
				{/*<Line data={data}/>*/}
			</div>
		</section>
	);
};

export default HealthChart;
