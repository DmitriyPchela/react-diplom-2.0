import React from 'react';
import SectionHeader from "../common/SectionHeader";
import EditInfo from "./includes/EditInfo";
import EditTable from "./includes/EditTable";
import LC from "local-storage";


const EditPage = () => {
	return (
		<main id="edit-page">
			<SectionHeader
				bgImage={require('../../assets/images/about-bg.png')}
				pageLink="/edit"
				pageName="Редагування профілю"
				pageLinkPrev="/account"
				pageNamePrev="Особистий кабінет"
			/>
			<EditInfo/>
			{
				LC.get('profile').isAdmin ?
					'' :
					<EditTable/>
			}
		</main>
	);
};

export default EditPage;