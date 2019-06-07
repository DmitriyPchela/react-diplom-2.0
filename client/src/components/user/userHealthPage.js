import React from 'react';
import HeaderPage from "../common/HeaderPage";
import EditInfo from "../edit/includes/EditInfo";
import EditTable from "../edit/includes/EditTable";

const UserHealthPage = props => {
	return (
		<main id="user-page">
			<HeaderPage
				bgImage="/images/about-bg.png"
				pageLink="/edit"
				pageName="Здоров'є паціента"
				pageLinkPrev="/account"
				pageNamePrev="Особистий кабінет"
			/>
			<EditInfo/>
			<EditTable/>
		</main>
	);
};

export default UserHealthPage;