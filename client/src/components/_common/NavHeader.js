import React, {useEffect} from 'react';
import {NavLink, Link} from "react-router-dom";

import { connect } from 'react-redux';
import { userActions } from '../_actions';


const NavHeader = props => {
	
	useEffect(() => {
		props.dispatch(userActions.getAll());
	}, []);
	
	return (
		<header>
			<div className="container nav-header-box">
				<NavLink exact to="/" className="logo-box">
					<img src="images/logo.png" alt="Logo img"/>
				</NavLink>
				<nav className="header-nav">
					<NavLink to="/about" className="header-nav__item">Про нас</NavLink>
					<NavLink to="/services" className="header-nav__item">Послуги</NavLink>
					<NavLink to="/news" className="header-nav__item">Новини</NavLink>
					<NavLink to="/contacts" className="header-nav__item">Контакти</NavLink>
				</nav>
				<div className="login-box">
					{
						props.user ?
							<div className="phone-box">
								<Link to="/account">
									<img src="images/user.svg" alt="Call icon"/>
									Особистий кабінет
								</Link>
							</div>
							: <>
								<Link to="/registration" className="register-link">Реєстрація</Link>
								<div className="phone-box">
									<Link to="/login">
										<img src="images/user.svg" alt="Call icon"/>
										Увійти
									</Link>
								</div>
							</>
					}
				</div>
			</div>
		</header>
	);
};

function mapStateToProps(state) {
	const { authentication } = state;
	const { user } = authentication;
	return {
		user
	};
}

export default connect(mapStateToProps)(NavHeader);
