import React from 'react';
import HeaderPage from "../common/HeaderPage";

const NewsPage = () => {
	return (
		<main id="newsPage">
			<HeaderPage bgImage={'https://colorlib.com/preview/theme/medart/images/news-bg.png'} pageLink={'/news'} pageName={"Новини"}/>
			<section className="section-news">
				<h1>Welcome to News page!!!</h1>
			</section>
		</main>
	);
};

export default NewsPage;
