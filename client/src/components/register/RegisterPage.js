import React from 'react';

import SectionHeader from "../common/SectionHeader";
import RegisterForm from "./RegisterForm";

const RegisterPage = props => {
	return (
		<main id="registration-page">
			<SectionHeader bgImage={require('../../assets/images/about-bg.png')} pageLink="/registration" pageName="Реєстрація"/>
			<section className="section-register">
				<RegisterForm/>
			</section>
		</main>
	);
};
export default RegisterPage;