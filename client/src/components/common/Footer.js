import React from 'react';
import {Link} from "react-router-dom";


const NavFooter = () => {
	return (
		<footer>
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-6 col-lg-4">
						<div className="footer-about">
							<Link to="/">
								<img src={require('../../assets/images/logo.png')} alt="Logo"/>
							</Link>
							<p className="text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cupiditate
								debitis distinctio doloremque dolores enim, illum maxime natus, possimus quas qui sed
								sint voluptates! Beatae eveniet inventore quisquam unde voluptatum.
							</p>
							<p className="text copyright">
								Copyright © {new Date().getFullYear()} Всі права захищені
							</p>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
						<div className="footer-contacts">
							<h2 className="title">Контакти</h2>
							<ul className="p-0 m-0">
								<li>
									<span>Адреса: </span>
									Mitlton Str. 26-27 London UK
								</li>
								<li>
									<span>Телефон: </span>
									<a href="tel:+38 (068) 483 92-94">+38 (068) 483 92-94</a>
								</li>
								<li>
									<span>Email: </span>
									<a href="mailto:d.pchelyanskiy97z@gmail.com">d.pchelyanskiy97z@gmail.com</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
						<div className="footer-links">
							<h2 className="title">Корисні посилання</h2>
							<ul className="p-0 m-0">
								<li>
									<Link to="/">Головна</Link>
								</li>
								<li>
									<Link to="/about">Про нас</Link>
								</li>
								<li>
									<Link to="/services">Послуги</Link>
								</li>
								<li>
									<Link to="/news">Новини</Link>
								</li>
								<li>
									<Link to="/contacts">Контакти</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default NavFooter;
