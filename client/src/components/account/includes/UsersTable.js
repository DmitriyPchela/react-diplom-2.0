import React, { useEffect, useState } from 'react';
import {withRouter } from 'react-router-dom';
import {usersApi, healthStatusApi} from "../../../api";

const UsersTable = (props) => {
	const [usersInfo, setUsersInfo] = useState([]);
	const [usersHealth, setUsersHealth] = useState([]);

	useEffect(() => {
		let usersArr = [];
		let usersHealthArr = [];
		usersApi.list().then(res => {
			res.data.data.map(item => {
				if (item.login !== 'admin') {
					usersArr.push(item);
					setUsersInfo({usersInfo: usersArr});
				}
			});
		});
		healthStatusApi.list().then(res => {
			res.data.data.map(item => {
				usersHealthArr.push(item);
				setUsersHealth({usersHealth: usersHealthArr});
			});
		})
	}, []);
	
	const handleView = (userId, userIndex, userLogin) => () => {
		props.history.push('/user/'+ userId, {
			userInfo: usersInfo.usersInfo[userIndex],
			userHealth: usersHealth.usersHealth.filter(item => item.userID === userLogin && item)
		});
	};

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
						usersInfo.usersInfo && usersInfo.usersInfo.map((item, index) =>
							<tr key={item._id} onClick={handleView(item._id, index, item.login)}>
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
};

export default withRouter(UsersTable);