import React, { useEffect, useState } from 'react';
import {withRouter } from 'react-router-dom';

import {usersApi} from "../../../api";


const UsersTable = (props) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		let usersArr = [];
		usersApi.list().then(res => {
			res.data.data.map(item => {
				if (item.login !== 'admin') {
					usersArr.push(item);
					setUsers({users: usersArr});
				}
			});
		});
	}, []);

	const handleView = (id) => () => {
		props.history.push('/user/'+ id);
	};

	console.log(users);

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
						users.users && users.users.map(item =>
							<tr key={item._id} onClick={handleView(item._id)}>
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