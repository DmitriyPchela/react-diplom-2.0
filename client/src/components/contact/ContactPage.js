import React, {useState} from 'react';
import SectionHeader from "../common/SectionHeader";
import InputMask from "react-input-mask";

const appointmentData = {
	name: '',
	phone: '',
	email: '',
	comment: ''
};

const ContactPage = () => {
	const [data, setData] = useState(appointmentData);
	
	const handleChange = (e) => {
		const {name, value} = e.target;
		setData(prev => ({
			...prev,
			[name]: value
		}));
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(data);
	};
	
	return (
		<main id='contactPage'>
			<SectionHeader bgImage="https://colorlib.com/preview/theme/medart/images/contact-bg.png" pageLink="/contact" pageName="Контакти"/>
			<section className="section-appointment">
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-4">
							<div className="appointment-box contact-info">
								<h2 className="appointment-box__title">Контактна інформація</h2>
								<ul className="list p-0 m-0">
									<li className="list__item">
										Телефон:
										<span>+38 (068) 483-92-94</span>
									</li>
									<li className="list__item">
										E-mail:
										<span>d.pchelyanskiy97z@gmail.com</span>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-12 col-lg-4">
							<div className="appointment-box opening-hours">
								<h2 className="appointment-box__title">Графік консультацій</h2>
								<ul className="list p-0 m-0">
									<li className="list__item">
										Пн-Пт
										<span>8:00 - 19:00</span>
									</li>
									<li className="list__item">
										Сб-Вс
										<span>9:30 - 17:00</span>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-12 col-lg-4">
							<div className="appointment-box emergency-box">
								<h2 className="appointment-box__title">Допомога</h2>
								<div className="phone-box">
									<a href="tel: +38 (068) 483 92 94">
										<img src={require('../../assets/images/emergency-call.png')} alt="Call icon"/>
										+38 (068) 483 92 94
									</a>
								</div>
								<p className="appointment-box__text">
									Якщо Вам потрібна допомога, то зв'яжіться з Вашим лікарем.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="contact-form">
				<div className="container">
					<h2 className="title">Зворотній зв'язок</h2>
					<form onSubmit={handleSubmit} className='row'>
						<div className="col-12 col-md-4">
							<input type="text" name="name" placeholder="Ім'я" onChange={handleChange}/>
						</div>
						<div className="col-12 col-md-4">
							<input type="email" name="email" placeholder="E-mail"/>
						</div>
						<div className="col-12 col-md-4">
							<InputMask mask="+38 (099) 999-99-99" name="phone" type="text" placeholder="Номер телефону" onChange={handleChange}/>
						</div>
						<div className="col-12">
							<textarea name="comment" rows="5" placeholder="Коментар" onChange={handleChange}/>
						</div>
						<div className="col-12">
							<button className="btn-custom" type="submit">Записатись</button>
						</div>
					</form>
				</div>
			</section>
		</main>
	);
};

export default ContactPage;
