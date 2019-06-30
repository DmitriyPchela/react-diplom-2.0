import React from 'react';
import {Link} from "react-router-dom";

const UserInfo = ({user}) => {
	return (
		<section className="section-user-info">
			<div className="container">
				<div className="link-back">
					<Link to="/account">
						<i className="fas fa-arrow-left"/>
						Повернутись назад
					</Link>
				</div>
				<div className="row">
					<div className="col-6">
						<div className="user-info-first align-items-center">
							<h2 className="user-info-first__name">{user.name} {user.surname}</h2>
						</div>
					</div>
					<div className="col-6">
						<div className="user-info-second">
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
			</div>
		</section>
	);
};

export default UserInfo;