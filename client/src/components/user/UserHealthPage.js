import React, { Component } from 'react';
import SectionHeader from "../common/SectionHeader";
import UserInfo from "./includes/UserInfo";
import UserHealthTable from "./includes/UserTable";
import ModalMedicine from "./includes/ModalMedicine";
import MedicineTable from "../account/includes/MedicineTable";

class UserHealthPage extends Component {
	state = {
		userInfo: this.props.location.state
	};
	
	render () {
		const { userInfo } = this.state;
		
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
				<MedicineTable user={userInfo.userInfo} title="Ліки пацієнта"/>
				<UserHealthTable health={userInfo.userHealth}/>
				<ModalMedicine userData={userInfo.userInfo}/>
			</main>
		);
	}
}

export default UserHealthPage;