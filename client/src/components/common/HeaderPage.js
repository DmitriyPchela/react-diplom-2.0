import React from 'react';
import Breadcrumps from "./Breadcrumps";

const HeaderPage = ({bgImage, pageLink, pageName, pageLinkPrev, pageNamePrev}) => {
	return (
		<section className="section-header">
			<img src={bgImage} alt="About"/>
			<div className="container">
				<h1 className="title">{pageName}</h1>
				<Breadcrumps pageLink={pageLink} pageName={pageName} pageLinkPrev={pageLinkPrev} pageNamePrev={pageNamePrev}/>
			</div>
		</section>
	);
};

export default HeaderPage;
