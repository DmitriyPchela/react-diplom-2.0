import React, { useState } from 'react';
import HeaderPage from "../common/HeaderPage";
import UserInfo from "./includes/userInfo";
import UserHealthTable from "./includes/userTable";

const UserHealthPage = props => {
	const [userInfo, setUserInfo] = useState(props.location.state);
	
	return (
		<main id="user-page">
			<HeaderPage
				bgImage={require('../../assets/images/about-bg.png')}
				pageLink="/edit"
				pageName="Здоров'є паціента"
				pageLinkPrev="/account"
				pageNamePrev="Особистий кабінет"
			/>
			<UserInfo user={userInfo.userInfo}/>
			<UserHealthTable health={userInfo.userHealth}/>
			<div className="btn-wrap d-flex justify-content-center mt-5">
				<button className="btn-custom">Виписати ліки</button>
			</div>
		</main>
	);
};

export default UserHealthPage;