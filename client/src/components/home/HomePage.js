import React, {useState} from 'react';
import Header from "./sections/Header";
import Appointment from "./sections/Appointment";
import News from './sections/News';

const appointmentData = {
	name: '',
	phone: '',
	comment: ''
};

const HomePage = (props) => {
	const [data, setData] = useState(appointmentData);
	
	const handleChange = (e) => {
		const {name, value} = e.target;
		setData({...data, [name]: value});
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submit');
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
