import React from 'react';
import HeaderPage from "../common/HeaderPage";
import EditInfo from "./includes/EditInfo";

const EditPage = () => {
	return (
		<main id="edit-page">
			<HeaderPage
				bgImage="images/about-bg.png"
				pageLink="/edit"
				pageName="Редагування профілю"
				pageLinkPrev="/account"
				pageNamePrev="Особистий кабінет"
			/>
			<EditInfo/>
		</main>
	);
};

export default EditPage;