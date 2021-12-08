import React from "react";
import xp1 from "../../assets/img/learn.jpg";
import xp2 from "../../assets/img/xp2.jpg";
import xp3 from "../../assets/img/xp3.jpg";
import xp4 from "../../assets/img/xp4.jpg";

export default function PopularCourse() {
	return (
		<div>
			<section className="popular-course-area section-gap">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="menu-content pb-45 col-lg-8">
							<div className="title text-center">
								<h1 className="mb-8">Some Hot Topics</h1>
								<p>
									There is no other better time to take that bold step other than now.{" "}
									<br />
									Continue reading to learn more about the most searched topics on google
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="active-popular-carusel">
							<div className="single-popular-carusel">
								<div className="thumb-wrap relative">
									<div className="thumb relative">
										<div className="overlay overlay-bg" />
										<img className="img-fluid" src={xp1} alt="" />
									</div>
								</div>
								<div className="details">
									<a
										href="#0"
										onClick={(e) => {
											e.preventDefault();
										}}
										style={{ textDecoration: "none" }}
									>
										<h4>Learn All About Studying Abroad Opportunities</h4>
									</a>
									<p>
										The opportunities that comes with studying abroad is enumerable, our
										professional team, is always on ground to guide you through
									</p>
								</div>
							</div>
							<div className="single-popular-carusel">
								<div className="thumb-wrap relative">
									<div className="thumb relative">
										<div className="overlay overlay-bg" />
										<img className="img-fluid" src={xp2} alt="" />
									</div>
								</div>
								<div className="details">
									<a
										href="#0"
										onClick={(e) => {
											e.preventDefault();
										}}
										style={{ textDecoration: "none" }}
									>
										<h4>Learn About Our Education Package</h4>
									</a>
									<p>Get more Information on how to secure your dream admission</p>
								</div>
							</div>
							<div className="single-popular-carusel">
								<div className="thumb-wrap relative">
									<div className="thumb relative">
										<div className="overlay overlay-bg" />
										<img className="img-fluid" src={xp3} alt="" />
									</div>
									<div className="meta d-flex justify-content-between">
										<p>
											{/* <span className="lnr lnr-users" /> 355{" "} */}
											{/* <span className="lnr lnr-bubble" />
											35 */}
										</p>
										<h4>Know More...</h4>
									</div>
								</div>
								<div className="details">
									<a
										href="#0"
										onClick={(e) => {
											e.preventDefault();
										}}
										style={{ textDecoration: "none" }}
									>
										<h4>Learn About Our Different Study Packages</h4>
									</a>
									<p>
										Get Information on how to secure your admission abroad seemlessly in
										UK, US, Canada and Australia
									</p>
								</div>
							</div>
							<div className="single-popular-carusel">
								<div className="thumb-wrap relative">
									<div className="thumb relative">
										<div className="overlay overlay-bg" />
										<img className="img-fluid" src={xp4} alt="" />
									</div>
								</div>
								<div className="details">
									<a
										href="#0"
										onClick={(e) => {
											e.preventDefault();
										}}
										style={{ textDecoration: "none" }}
									>
										<h4>All You Need to Know About Studying Abroad</h4>
									</a>
									<p>
										Our team of professionals are on ground to guid you through on a
										step-by-step process of securing that admission in your dream school
										abroad.
									</p>
								</div>
							</div>
							<div className="single-popular-carusel">
								<div className="thumb-wrap relative">
									<div className="thumb relative">
										<div className="overlay overlay-bg" />
										<img className="img-fluid" src={xp1} alt="" />
									</div>
								</div>
								<div className="details page-scroll">
									<a
										href="#0"
										onClick={(e) => {
											e.preventDefault();
										}}
										style={{ textDecoration: "none" }}
									>
										<h4>Learn How to Get that Course Abroad</h4>
									</a>
									<p>
										All you need to know about gaining admission into a school abroad with
										no prior background in a particular course
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
