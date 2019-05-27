import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

import HeaderPage from "../_common/HeaderPage";
import DiaryForm from "./DiaryForm";

const DiaryPage = () => {
	return (
		<main id='diaryPage'>
			<HeaderPage bgImage={'https://colorlib.com/preview/theme/medart/images/service-bg.png'} pageLink={'/services'} pageName={"Послуги"}/>
			<section className="section-info">
				<div className="container">
					<h1 className="title">Про наші послуги</h1>
					<div className="row">
						<div className="col-6">
							<p className="text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. At error, hic magnam numquam quasi quis quisquam quos similique vel
								vero. Distinctio minima mollitia quibusdam repudiandae! Dolor est itaque molestiae quibusdam.
							</p>
						</div>
						<div className="col-6">
							<p className="text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. At error, hic magnam numquam quasi quis quisquam quos similique vel
								vero. Distinctio minima mollitia quibusdam repudiandae! Dolor est itaque molestiae quibusdam.
							</p>
						</div>
					</div>
					<div className="btn-box">
						<Link to="/news" className="btn-custom">Детальніше</Link>
					</div>
				</div>
			</section>
			<section className="section-services">
				<div className="container">
					<h2 className="sub-title">Щоденник контролю</h2>
					<DiaryForm/>
				</div>
			</section>
		</main>
	);
};

export default DiaryPage;
