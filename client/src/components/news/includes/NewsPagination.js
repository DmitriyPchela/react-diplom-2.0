import React from 'react';
import {Link} from "react-router-dom";

const NewsPagination = () => {
	return (
		<div className="col-12">
			<ul className="pagination-box">
				<li className="pagination-box__item active"><Link to="/news">01</Link></li>
				<li className="pagination-box__item"><Link to="/news">02</Link></li>
				<li className="pagination-box__item"><Link to="/news">03</Link></li>
				<li className="pagination-box__item"><Link to="/news">04</Link></li>
			</ul>
		</div>
	);
};

export default NewsPagination;
