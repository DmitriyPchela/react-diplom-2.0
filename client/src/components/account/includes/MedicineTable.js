import React, { useState, useEffect } from 'react';
import LC from "local-storage";
import { medicineApi, usersApi } from "../../../api";

const MedicineTable = ({ user, title }) => {
	const [medicine, setMedicine] = useState({});
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		const token = LC.get('profile').token;
		usersApi.listLogged({token: token}).then(res => {
			if (res.data.status === 'success') {
				medicineApi.list(user !== undefined ? user._id : res.data.data._id).then(res => {
					if (res.data.status === 'success') {
						setMedicine(res.data.data);
						setLoading(false);
					} else {
						alert(res.data.status);
					}
				});
			} else {
				alert(res.data.status);
			}
		});
	}, []);
	
	return (
		<section className="section-medicine">
			<div className="container">
				<h2 className="section-title">{title}</h2>
				<table className="table table-bordered table-hover ">
					<thead>
					<tr>
						<th scope="col" rowSpan="2">Час прийому</th>
						<th scope="col" rowSpan="2">Назва</th>
						<th scope="col" rowSpan="2">Рекомендація</th>
					</tr>
					</thead>
					<tbody>
					{
						loading ? <tr><td colSpan="3"><p>Зачекайте будь-ласка, завантажуються дані про пацієнта</p></td></tr> :
							medicine.length === 0 ?
								<tr>
									<td colSpan="3">
										<p>Лікі ще не додано</p>
									</td>
								</tr>
								: medicine.map(item => {
									return <tr key={item._id}>
										<td>{item.time}</td>
										<td>{item.name}</td>
										<td>{item.recommend}</td>
									</tr>
								})
					}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default MedicineTable;
