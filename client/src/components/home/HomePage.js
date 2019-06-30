import React, { PureComponent } from 'react';
import Header from "./includes/Header";
import Appointment from "./includes/Appointment";
import News from './includes/News';

class HomePage extends PureComponent {
	render() {
		return (
			<main id="homePage">
				<Header/>
				<Appointment/>
				<News/>
			</main>
		)
	}
}

export default HomePage;
