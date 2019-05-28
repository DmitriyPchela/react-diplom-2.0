import React, {useState} from 'react';

const subscribeData = {
	email: ''
};

const Subscribe = () => {
	const [formData, setFormData] = useState(subscribeData);
	
	const handleChange = (e) => {
		let {name, value} = e.target;
		setFormData({...formData, [name]: value});
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	
	return (
		<section className="section-subscribe">
			<img className="bg-image" src="images/subscribe-bg.jpg" alt="Subscribe background"/>
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-8 offset-lg-2">
						<h2 className="section-title">Підпишись на нашу розсилку</h2>
						<form onSubmit={handleSubmit}>
							<input type="email" name="email" id="userEmail" placeholder="E-mail" onChange={handleChange}/>
							<button className="btn-custom">Підписатись</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Subscribe;
