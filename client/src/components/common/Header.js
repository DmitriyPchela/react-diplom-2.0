import React  from 'react';
import { NavLink, Link, withRouter } from "react-router-dom";


const Header = props => {
	return (
		<header>
			<div className="container nav-header-box">
				<NavLink exact to="/" className="logo-box">
					<img src={require('../../assets/images/logo.png')} alt="Logo img"/>
				</NavLink>
				<nav className="header-nav">
					<Link to="/about" className="header-nav__item">Про нас</Link>
					<Link to="/services" className="header-nav__item">Послуги</Link>
					<Link to="/news" className="header-nav__item">Новини</Link>
					<Link to="/contacts" className="header-nav__item">Контакти</Link>
				</nav>
				<div className="login-box">
					{
						props.isAuthorized ?
							<div className="phone-box">
								<NavLink to="/account">
									<img src={require('../../assets/images/user.svg')} alt="Call icon"/>
									Особистий кабінет
								</NavLink>
							</div>
							:
							<>
								<NavLink to="/registration" className="register-link">Реєстрація</NavLink>
								<div className="phone-box">
									<NavLink to="/login">
										<img src={require('../../assets/images/user.svg')} alt="Call icon"/>
										Увійти
									</NavLink>
								</div>
							</>
					}
				</div>
			</div>
		</header>
	);
};

export default withRouter(Header);
