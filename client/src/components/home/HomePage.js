import React, {useState} from 'react';
import Header from "./includes/Header";
import Appointment from "./includes/Appointment";
import News from './includes/News';

const appointmentData = {
	name: '',
	phone: '',
	comment: ''
};

const HomePage = props => {
	const [data, setData] = useState(appointmentData);
	
	const handleChange = (e) => {
		const {name, value} = e.target;
		setData({...data, [name]: value});
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	
	return (
		<main id="homePage">
			<Header/>
			<Appointment onChange={handleChange} onSubmit={handleSubmit}/>
			<News/>
		</main>
	);
};

export default HomePage;
