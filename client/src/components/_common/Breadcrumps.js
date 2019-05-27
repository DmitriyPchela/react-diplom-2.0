import React from 'react';
import {NavLink} from "react-router-dom";

const Breadcrumps = ({pageName, pageLink}) => {
	return (
		<div className="breadcrumps-box">
			<NavLink to="/">Головна</NavLink>
			{' / '}
			<NavLink to={`${pageLink}`} className='selected'>{pageName}</NavLink>
		</div>
	);
};

export default Breadcrumps;
