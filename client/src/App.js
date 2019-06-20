import React, { Component } from 'react';
import { connect }from 'react-redux';
import LC from "local-storage";

import { authApi } from './api';
import { setUserProfile } from "./store/actions";
import NavHeader from "./components/common/Header";
import Footer from "./components/common/Footer";
import RootRouter from "./routes";


class App extends Component {
	async componentDidMount() {
		if (LC.get('profile') !== null) {
			let token = LC.get('profile').token;

			const res = await authApi.isAuthorized({
				token: token
			});

			if (res.data.status === 'success') {
				this.props.setUserProfile({
					login: res.data.data.profile.login,
					token: res.data.data.profile.token,
					isAuthorized: res.data.data.isAuthorized,
					isAdmin: res.data.data.profile.isAdmin
				});
			}
		}
	}

	render() {
		const { isAuth } = this.props

		return (
			<>
				<NavHeader isAuthorized={isAuth}/>
				<RootRouter/>
				<Footer/>
			</>
		)
	}
}

// const App1 = props => {
// 	useEffect(() => {
// 		(async () => {
// 			if (LC.get('profile') !== null) {
// 				let token = LC.get('profile').token;
//
// 				const res = await authApi.isAuthorized({
// 					token: token
// 				});
//
// 				if (res.data.status === 'success') {
// 					props.setUserProfile({
// 						login: res.data.data.profile.login,
// 						token: res.data.data.profile.token,
// 						isAuthorized: res.data.data.isAuthorized,
// 						isAdmin: res.data.data.profile.isAdmin
// 					});
// 				}
// 			}
// 		})();
//
// 	}, []);
//
// 	return (
// 		<>
// 			<NavHeader isAuthorized={props.isAuth} />
// 			<Switch>
// 				<Route exact path="/" component={HomePage}/>
// 				<Route path="/about" component={AboutPage}/>
// 				<Route path="/contacts" component={ContactPage}/>
// 				<Route path="/news" component={NewsPage}/>
// 				<Route path="/services" component={DiaryPage}/>
// 				<Route path="/registration" component={RegisterPage}/>
// 				<Route path="/login" component={Login}/>
// 				<PrivateRoute path="/account" component={Account}/>
// 				<PrivateRoute path="/edit" component={Edit}/>
// 				<PrivateRoute path="/user/:id" component={userHealthInfo}/>
// 			</Switch>
// 			<Footer/>
// 		</>
//
// 	);
// };

function mapStateToProps({ profile }) {
	return {
		isAuth: profile.isAuthorized
	};
}


export default connect(mapStateToProps,  { setUserProfile })(App);