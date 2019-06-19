import React, { useState, useEffect } from 'react';
import {Redirect} from "react-router-dom";

import {Link} from "react-router-dom";
import LC from "local-storage";
import {authApi, usersApi} from "../../../api";
import {connect} from "react-redux";
import {deleteUserProfile} from "../../../store/actions";

const Info = props => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);
	
	const getCurrentUser = (users) => {
		users.map(item => {
			return item.token === LC.get('profile').token && setUser(item);
		});
	};
	
	const apiCallSuccess = (user) => {
		getCurrentUser(user);
		setLoading(false);
	};
	
	useEffect( () => {
		(async function () {
			const apiCall = await usersApi.list();
			apiCall.statusText === 'OK' ? apiCallSuccess(apiCall.data.data) : alert(apiCall.statusText);
		})();
	}, []);
	
	const logout = () => {
		let token = LC.get('profile').token;
		authApi.logout({ token: token }).then(() => {
			props.deleteUserProfile();
			window.location.reload();
		});
	};

	return (
		<section className="section-account">
			<div className="container">
				{ loading ? <p>Зачекайте будь-ласка, завантажуються дані об користувачеві</p> :
					(
						<div className="row">
							<div className="col-6">
								<div className="user-info-first align-items-center">
									<h2 className="user-info-first__name">{user.surname} {user.name}</h2>
									<div className="user-info-first__links">
										<Link to="/edit" className="btn-custom">Редагувати</Link>
										<Link to="/" className="btn-custom" onClick={logout}>Вийти</Link>
									</div>
								</div>
							</div>
							<div className="col-6">
								<div className="user-info-second">
									<div className="user-info-second__item">
										<span className="field-name">Логін: </span>
										<span className="field-text">{user.login}</span>
									</div>
									<div className="user-info-second__item">
										<span className="field-name">Email: </span>
										<span className="field-text">{user.email}</span>
									</div>
									<div className="user-info-second__item">
										<span className="field-name">Номер телефону: </span>
										<span className="field-text">{user.phone}</span>
									</div>
								</div>
							</div>
						</div>
					)
				}
			</div>
		</section>
	);
};

const mapStateToProps = ({ profile }) => {
	return { profile };
};

export default connect(
	mapStateToProps, { deleteUserProfile }
)(Info);