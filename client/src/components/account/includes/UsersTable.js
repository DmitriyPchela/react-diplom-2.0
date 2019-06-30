import React, { Component } from 'react';
import {withRouter } from 'react-router-dom';
import {usersApi, healthStatusApi} from "../../../api";

class UsersTable extends Component {
	state = {
		usersInfo: [],
		usersHealth: []
	};
	
	componentDidMount() {
		usersApi.list().then(res => {
			res.data.data.map(item => {
				if (item.login !== 'admin') {
					this.setState(state => ({
						usersInfo: [...state.usersInfo, item]
					}));
				}
			});
		});
		
		healthStatusApi.list().then(res => {
			this.setState({
				usersHealth: res.data.data
			});
		})
	};
	
	handleView = (userId, userIndex, userLogin) => () => {
		this.props.history.push('/user/'+ userId, {
			userInfo: this.state.usersInfo[userIndex],
			userHealth: this.state.usersHealth.filter(item => item.userID === userLogin && item)
		});
	};

	render() {
		const { usersInfo } = this.state;
		
		return (
			<section className="section-health-status admin-users">
				<div className="container">
					<h2 className="section-title">Ваші пацієнти</h2>
					<table className="table table-bordered table-hover ">
						<thead>
						<tr>
							<th scope="col">Ім'я</th>
							<th scope="col">Прізвище</th>
							<th scope="col">E-mail</th>
							<th scope="col">Телефон</th>
						</tr>
						</thead>
						<tbody>
						{
							usersInfo && usersInfo.map((item, index) =>
								<tr key={item._id} onClick={this.handleView(item._id, index, item.login)}>
									<td>{item.name}</td>
									<td>{item.surname}</td>
									<td>{item.email}</td>
									<td>{item.phone}</td>
								</tr>
							)
						}
						</tbody>
					</table>
				</div>
			</section>
		);
	}
}


export default withRouter(UsersTable);