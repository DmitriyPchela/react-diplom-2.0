import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import "swiper/dist/css/swiper.min.css";
import Swiper from "swiper/dist/js/swiper.esm.bundle";

const Header = () => {
	useEffect(() => {
		let newSwiper = new Swiper('.swiper-container', {
			direction: 'horizontal',
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: (index, className) => `<span className=${className}>0${index + 1}</span>`,
			},
		})
	}, []);
	
	return (
		<section className="section-header-slide">
			<div className="swiper-container">
				<div className="swiper-wrapper">
					<div className="swiper-slide">
						<img src="images/hero.jpg" alt="" className="swiper-slide__bg"/>
						<div className="container h-100">
							<div className="row h-100">
								<div className="col-xl-6 col-12">
									<div className="swiper-slide__info">
										<h1 className="swiper-slide__info__title">The Best Medical Services</h1>
										<p className="swiper-slide__info__text">
											Lorem ipsum dolor sit amet, consectetur
											adipisicing elit. A aliquam assumenda atque beatae cupiditate dolorem doloremque eos
											esse, et eum exercitationem ipsam itaque laudantium odio odit optio provident
											sapiente sed.
										</p>
										<Link to='/news/detailed-news' className="swiper-slide__info__btn-more btn-custom">
											Детальніше
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="swiper-slide">
						<img src="images/hero.jpg" alt="" className="swiper-slide__bg"/>
						<div className="container h-100">
							<div className="row h-100">
								<div className="col-xl-6 col-12">
									<div className="swiper-slide__info">
										<h1 className="swiper-slide__info__title">The Best Medical Services</h1>
										<p className="swiper-slide__info__text">
											Lorem ipsum dolor sit amet, consectetur
											adipisicing elit. A aliquam assumenda atque beatae cupiditate dolorem doloremque eos
											esse, et eum exercitationem ipsam itaque laudantium odio odit optio provident
											sapiente sed.
										</p>
										<Link to='/news/detailed-news' className="swiper-slide__info__btn-more btn-custom">
											Детальніше
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="swiper-slide">
						<img src="images/hero.jpg" alt="" className="swiper-slide__bg"/>
						<div className="container h-100">
							<div className="row h-100">
								<div className="col-xl-6 col-12">
									<div className="swiper-slide__info">
										<h1 className="swiper-slide__info__title">The Best Medical Services</h1>
										<p className="swiper-slide__info__text">
											Lorem ipsum dolor sit amet, consectetur
											adipisicing elit. A aliquam assumenda atque beatae cupiditate dolorem doloremque eos
											esse, et eum exercitationem ipsam itaque laudantium odio odit optio provident
											sapiente sed.
										</p>
										<Link to='/news/detailed-news' className="swiper-slide__info__btn-more btn-custom">
											Детальніше
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="swiper-pagination"></div>
			</div>
		</section>
	);
};

export default Header;
