import React from 'react';
import LC from "local-storage";
import { Redirect, Route } from "react-router-dom";


export const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				LC.get('profile') !== null ? (
					<Component {...props}/>
				) : (
					<Redirect
						to={{
							pathname: "/",
							state: { from: props.location }
						}}
					/>
				)
			}
		/>
	);
};
