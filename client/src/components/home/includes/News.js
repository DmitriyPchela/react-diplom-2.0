import React from 'react';
import {Link} from "react-router-dom";


const News = props => {
	return (
		<section className="section-news">
			<div className="container">
				<h2 className="section-title">Новини</h2>
				<div className="row">
					<div className="col-12 col-md-6 col-lg-4">
						<div className="news-box">
							<Link to="/news" className="news-box__image">
								<img src={require('../../../assets/images/hero.jpg')} alt="News img"/>
							</Link>
							<div className="news-box__header">
								<h3 className="news-box__header__title">Нові технології в медицині</h3>
								<div className="news-box__header__posted">
									<div className="news-box__header__posted__date">
										Date:
										<span>April 12, 2018</span>
									</div>
									<div className="news-box__header__posted__author">
										Site:
										<Link to="/news">site-example.com</Link>
									</div>
								</div>
							</div>
							<div className="news-box__info">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cumque eaque
									eveniet ex inventore, officiis possimus quo suscipit. Accusamus amet aperiam
									aspernatur distinctio dolorem eligendi incidunt numquam obcaecati possimus sint?
								</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-4">
						<div className="news-box">
							<Link to="/news" className="news-box__image">
								<img src={require('../../../assets/images/hero.jpg')} alt="News img"/>
							</Link>
							<div className="news-box__header">
								<h3 className="news-box__header__title">Нові технології в медицині</h3>
								<div className="news-box__header__posted">
									<div className="news-box__header__posted__date">
										Date:
										<span>April 12, 2018</span>
									</div>
									<div className="news-box__header__posted__author">
										Site:
										<Link to="/news">site-example.com</Link>
									</div>
								</div>
							</div>
							<div className="news-box__info">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cumque eaque
									eveniet ex inventore, officiis possimus quo suscipit. Accusamus amet aperiam
									aspernatur distinctio dolorem eligendi incidunt numquam obcaecati possimus sint?
								</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-4">
						<div className="news-box">
							<Link to="/news" className="news-box__image">
								<img src={require('../../../assets/images/hero.jpg')} alt="News img"/>
							</Link>
							<div className="news-box__header">
								<h3 className="news-box__header__title">Нові технології в медицині</h3>
								<div className="news-box__header__posted">
									<div className="news-box__header__posted__date">
										Date:
										<span>April 12, 2018</span>
									</div>
									<div className="news-box__header__posted__author">
										Site:
										<Link to="/news">site-example.com</Link>
									</div>
								</div>
							</div>
							<div className="news-box__info">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cumque eaque
									eveniet ex inventore, officiis possimus quo suscipit. Accusamus amet aperiam
									aspernatur distinctio dolorem eligendi incidunt numquam obcaecati possimus sint?
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default News;
