import React from 'react';
import {Link} from "react-router-dom";
import Collapsible from 'react-collapsible';
import SectionHeader from "../common/SectionHeader";


const AboutPage = () => {
	return (
		<main id='aboutPage'>
			<SectionHeader bgImage={require('../../assets/images/about-bg.png')} pageLink="/about" pageName="Про нас"/>
			<section className="section-about">
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-6">
							<div className="info-block">
								<h2 className="info-block__title">Історія медицини</h2>
								<p className="info-block__text">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet animi
									architecto autem eius, facilis impedit ipsa neque, numquam officiis omnis porro
									possimus quia repellat repellendus, tempore veritatis. Eum, saepe.
								</p>
								<Link to='/about' className="btn-custom">Детальніше</Link>
							</div>
						</div>
						<div className="col-12 col-lg-6 mt-5 mt-lg-0">
							<div className="image-block">
								<img src={require('../../assets/images/about-img.jpg')} alt="About"/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section-faq">
				<img className='section-bg' src={require('../../assets/images/faq-bg.jpg')} alt="Section-bg"/>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h2 className="title">Запитання та відповіді</h2>
						</div>
						<div className="col-12 col-lg-6 mb-5 mb-lg-0">
							<div className="accordeon-box">
								<Collapsible trigger="Запитання 1">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores aut dicta
										distinctio dolorum enim eos et fugiat harum impedit ipsa molestias natus nemo,
										nesciunt numquam reiciendis repudiandae, soluta tenetur.
									</p>
								</Collapsible>
								<Collapsible trigger="Запитання 2">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores aut dicta
										distinctio dolorum enim eos et fugiat harum impedit ipsa molestias natus nemo,
										nesciunt numquam reiciendis repudiandae, soluta tenetur.
									</p>
								</Collapsible>
								<Collapsible trigger="Запитання 3">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores aut dicta
										distinctio dolorum enim eos et fugiat harum impedit ipsa molestias natus nemo,
										nesciunt numquam reiciendis repudiandae, soluta tenetur.
									</p>
								</Collapsible>
								<Collapsible trigger="Запитання 4">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores aut dicta
										distinctio dolorum enim eos et fugiat harum impedit ipsa molestias natus nemo,
										nesciunt numquam reiciendis repudiandae, soluta tenetur.
									</p>
								</Collapsible>
							</div>
						</div>
						<div className="col-12 col-lg-6 mt-5 mt-lg-0">
							<div className="row">
								<div className="col-12 col-md-6">
									<div className="professional-box">
										<h2 className="title">Проффесіоналізм</h2>
										<img src={require('../../assets/images/cardiogram-2.png')} alt="Faq"/>
										<p className="text">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										</p>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="quality-box">
										<h2 className="title">Якість</h2>
										<img src={require('../../assets/images/hospital.png')} alt="Faq"/>
										<p className="text">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default AboutPage;
