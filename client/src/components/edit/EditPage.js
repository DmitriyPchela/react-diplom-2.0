import React from 'react';
import HeaderPage from "../common/HeaderPage";
import EditInfo from "./includes/EditInfo";
import EditTable from "./includes/EditTable";

const EditPage = () => {
	return (
		<main id="edit-page">
			<HeaderPage
				bgImage={require('../../assets/images/about-bg.png')}
				pageLink="/edit"
				pageName="Редагування профілю"
				pageLinkPrev="/account"
				pageNamePrev="Особистий кабінет"
			/>
			<EditInfo/>
			<EditTable/>
		</main>
	);
};

export default EditPage;