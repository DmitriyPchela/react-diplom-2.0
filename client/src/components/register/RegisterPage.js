import React from 'react';

import HeaderPage from "../common/HeaderPage";
import RegisterForm from "./RegisterForm";

const RegisterPage = props => {
	return (
		<main id="registration-page">
			<HeaderPage bgImage="images/about-bg.png" pageLink="/registration" pageName="Реєстрація"/>
			<section className="section-register">
				<RegisterForm/>
			</section>
		</main>
	);
};
export default RegisterPage;