import React, { Component }  from 'react';
import { Link } from "react-router-dom";
import LC from "local-storage";
import { healthStatusApi } from "../../../api";


class HealthTable extends Component {
	state = {
		healthData: [],
		loading: true
	};
	
	componentDidMount() {
		let login = LC.get('profile').login;
		healthStatusApi.listUser(login).then(res => {
			if (res.data.status === 'success') {
				this.setState({
					healthData: res.data.data,
					loading: false
				});
			} else {
				alert(res.data.status);
			}
		})
	}
	
	render () {
		return (
			<section className="section-health-status">
				<div className="container">
					<h2 className="section-title">Стан здоров'я</h2>
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
							this.state.loading ? <tr><td colSpan="6"><p>Зачекайте будь-ласка, завантажуються дані про пацієнта</p></td></tr> :
								this.state.healthData.length === 0 ?
									<tr>
										<td colSpan="6">
											<p>Данні про стан здоров'я відсутні. Перейдіть до <Link to="/services">"Вашого щоденнику"</Link> та заповніть дані!</p>
										</td>
									</tr>
									: this.state.healthData.length > 0 &&
									this.state.healthData.map(item => {
										return <tr key={item._id}>
											<td>{item.date}</td>
											<td>{item.time}</td>
											<td>{item.pressureUp}</td>
											<td>{item.pressureDown}</td>
											<td>{item.pulse}</td>
											<td>{item.healthy}</td>
										</tr>
									})
						}
						</tbody>
					</table>
				</div>
			</section>
		);
	}
}

export default HealthTable;