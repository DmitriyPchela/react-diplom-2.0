import React, { useState } from 'react';
import SectionHeader from "../common/SectionHeader";
import UserInfo from "./includes/UserInfo";
import UserHealthTable from "./includes/UserTable";
import ModalMedicine from "./includes/ModalMedicine";

const UserHealthPage = props => {
	const [userInfo, setUserInfo] = useState(props.location.state);
	
	return (
		<main id="user-page">
			<SectionHeader
				bgImage={require('../../assets/images/about-bg.png')}
				pageLink="/edit"
				pageName="Дані пацієнта"
				pageLinkPrev="/account"
				pageNamePrev="Особистий кабінет"
			/>
			<UserInfo user={userInfo.userInfo}/>
			<UserHealthTable health={userInfo.userHealth}/>
			<ModalMedicine userData={userInfo.userInfo}/>
		</main>
	);
};

export default UserHealthPage;