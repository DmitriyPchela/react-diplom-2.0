import React from 'react';
import Breadcrumps from "./Breadcrumps";

const HeaderPage = ({bgImage, pageLink, pageName}) => {
	return (
		<section className="section-header">
			<img src={bgImage} alt="About image"/>
			<div className="container">
				<h1 className="title">{pageName}</h1>
				<Breadcrumps pageLink={pageLink} pageName={pageName}/>
			</div>
		</section>
	);
};

export default HeaderPage;
