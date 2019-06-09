import React from 'react';
import { Link } from "react-router-dom";


const NewsSidebar = () => {
	return (
		<div className="col-12 col-lg-4 sidebar-box">
			<div className="sidebar-cats">
				<h2 className="widget-title">Categories</h2>
				<ul className="p-0 m-0">
					<li><Link to="/news">Radiology</Link></li>
					<li><Link to="/news">Cardiology</Link></li>
					<li><Link to="/news">Gastroenterology</Link></li>
					<li><Link to="/news">Neurology</Link></li>
					<li><Link to="/news">General surgery</Link></li>
				</ul>
			</div>
			
			<div className="popular-posts">
				<h2 className="widget-title">Latest Posts</h2>
				<ul className="p-0 m-0">
					<li className="d-flex flex-wrap justify-content-between">
						<Link className="image-link" to="/news">
							<img src={require('../../../assets/images/hero.jpg')} alt="News post small"/>
						</Link>
						<div className="entry-content">
							<h3 className="entry-title">
								<Link to="/news">Dentistry for everybody under 18</Link>
							</h3>
							<div className="posted-date">Feb 05, 2018</div>
						</div>
					</li>
					
					<li className="d-flex flex-wrap justify-content-between">
						<Link className="image-link" to="/news">
							<img src={require('../../../assets/images/hero.jpg')} alt="News post small"/>
						</Link>
						<div className="entry-content">
							<h3 className="entry-title">
								<Link to="/news">Dentistry for everybody under 18</Link>
							</h3>
							<div className="posted-date">Feb 05, 2018</div>
						</div>
					</li>
					
					<li className="d-flex flex-wrap justify-content-between">
						<Link className="image-link" to="/news">
							<img src={require('../../../assets/images/hero.jpg')} alt="News post small"/>
						</Link>
						<div className="entry-content">
							<h3 className="entry-title">
								<Link to="/news">Dentistry for everybody under 18</Link>
							</h3>
							<div className="posted-date">Feb 05, 2018</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NewsSidebar;
