import React, { PureComponent } from 'react';
import Header from "./includes/Header";
import Appointment from "./includes/Appointment";
import News from './includes/News';

const appointmentData = {
	name: '',
	phone: '',
	comment: ''
};

class HomePage extends PureComponent {
	state = {
		data: appointmentData
	}

	handleChange = e => {
		const {name, value} = e.target;
		this.setState(prevState => ({ ...prevState, [name]: value }))
	}
	handleSubmit = e => {
		e.preventDefault();
	};

	render(){
		return (
			<main id="homePage">
				<Header/>
				<Appointment onChange={this.handleChange} onSubmit={this.handleSubmit}/>
				<News/>
			</main>
		)
	}
}

// const HomePage1 = () => {
// 	const [data, setData] = useState(appointmentData);
//
// 	const handleChange = (e) => {
// 		const {name, value} = e.target;
// 		setData({...data, [name]: value});
// 	};
//
// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 	};
//
// 	return (
// 		<main id="homePage">
// 			<Header/>
// 			<Appointment onChange={handleChange} onSubmit={handleSubmit}/>
// 			<News/>
// 		</main>
// 	);
// };

export default HomePage;
