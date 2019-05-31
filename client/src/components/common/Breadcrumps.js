import React from 'react';
import {NavLink} from "react-router-dom";

const Breadcrumps = ({pageName, pageLink, pageLinkPrev, pageNamePrev}) => {
	return (
		<div className="breadcrumps-box">
			<NavLink to="/">Головна</NavLink>
			{' / '}
			{
				pageLinkPrev && pageNamePrev &&
				<NavLink to={`${pageLinkPrev}`}>{pageNamePrev} /</NavLink>
			}
			{' '}
			<NavLink to={`${pageLink}`} className='selected'>{pageName}</NavLink>
		</div>
	);
};

export default Breadcrumps;
