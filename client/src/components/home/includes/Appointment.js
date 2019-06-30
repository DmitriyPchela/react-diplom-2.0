import React, { useState } from 'react';
import InputMask from 'react-input-mask';

const appointmentData = {
	name: '',
	phone: '',
	comment: ''
};

const Appointment = () => {
	const [data, setData] = useState(appointmentData);
	
	const handleChange = e => {
		const {name, value} = e.target;
		setData(prevState => ({ ...prevState, [name]: value }))
	};
	const handleSubmit = e => {
		e.preventDefault();
		console.log(data);
	};
	
	return (
		<section className="section-appointment">
			<div className="container">
				<div className="row">
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
					<div className="col-12 col-lg-3">
						<div className="appointment-box emergency-box">
							<h2 className="appointment-box__title">Допомога</h2>
							<div className="phone-box">
								<a href="tel: +38 (068) 483 92 94">
									<img src={require('../../../assets/images/emergency-call.png')} alt="Call icon"/>
									+38 (068) 483 92 94
								</a>
							</div>
							<p className="appointment-box__text">
								Якщо Вам потрібна допомога, то зв'яжіться з Вашим лікарем.
							</p>
						</div>
					</div>
					<div className="col-12 col-lg-5">
						<div className="appointment-box">
							<h2 className="appointment-box__title">Записатися на консультацію</h2>
							<form onSubmit={handleSubmit}>
								<input name="name" type="text" placeholder="Ім'я" onChange={handleChange}/>
								<InputMask mask="+38 (099) 999-99-99" name="phone" type="text" placeholder="Номер телефону" onChange={handleChange}/>
								<textarea name="comment" rows="5" placeholder="Коментар" onChange={handleChange}/>
								<button className="btn-custom" type="submit">Записатися</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Appointment;
