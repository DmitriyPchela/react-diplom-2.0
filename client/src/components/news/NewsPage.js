import React from 'react';
import HeaderPage from "../common/HeaderPage";
import NewsBox from "./includes/NewsBox";
import NewsSidebar from "./includes/NewsSidebar";
import NewsPagination from "./includes/NewsPagination";

const NewsPage = () => {
	return (
		<main id="newsPage">
			<HeaderPage bgImage={'https://colorlib.com/preview/theme/medart/images/news-bg.png'} pageLink={'/news'} pageName={"Новини"}/>
			<section className="section-news">
				<div className="container">
					<div className="row">
						<NewsBox/>
						<NewsSidebar/>
						<NewsPagination/>
					</div>
				</div>
			</section>
		</main>
	);
};

export default NewsPage;
