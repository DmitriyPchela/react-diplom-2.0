import React  from 'react';
import { NavLink, Link, withRouter } from "react-router-dom";


const NavHeader = props => {
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
						props.isAuthorized ?
							<div className="phone-box">
								<Link to="/account">
									<img src="images/user.svg" alt="Call icon"/>
									Особистий кабінет
								</Link>
							</div>
							:
							<>
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

export default withRouter(NavHeader);
