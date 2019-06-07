import React from 'react';
import InputMask from 'react-input-mask';

const Appointment = ({onChange, onSubmit}) => {
	return (
		<section className="section-appointment">
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-4">
						<div className="appointment-box opening-hours">
							<h2 className="appointment-box__title">Графік консультацій</h2>
							<ul className="list p-0 m-0">
								<li className="list__item">
									Monday - Thursday
									<span>8.00 - 19.00</span>
								</li>
								<li className="list__item">
									Friday
									<span>8.00 - 18.30</span>
								</li>
								<li className="list__item">
									Saturday
									<span>9:30 - 17.00</span>
								</li>
								<li className="list__item">
									Sunday
									<span>9.30 - 15.00</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-12 col-lg-3">
						<div className="appointment-box emergency-box">
							<h2 className="appointment-box__title">Допомога</h2>
							<div className="phone-box">
								<a href="tel: +38 (068) 483 92 94">
									<img src="/images/emergency-call.png" alt="Call icon"/>
									+38 (068) 483 92 94
								</a>
							</div>
							<p className="appointment-box__text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aspernatur
								autem consequatur, deleniti dolores enim eos excepturi ipsa labore laudantium odio
								officiis perferendis perspiciatis quam ratione soluta vero voluptates.
							</p>
						</div>
					</div>
					<div className="col-12 col-lg-5">
						<div className="appointment-box">
							<h2 className="appointment-box__title">Зробити запис</h2>
							<form onSubmit={onSubmit}>
								<input name="name" type="text" placeholder="Ім'я" onChange={onChange}/>
								<InputMask mask="+38 (099) 999-99-99" name="phone" type="text" placeholder="Номер телефону" onChange={onChange}/>
								<textarea name="comment" rows="5" placeholder="Коментар" onChange={onChange}/>
								<button className="btn-custom" type="submit">Записатись</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Appointment;
