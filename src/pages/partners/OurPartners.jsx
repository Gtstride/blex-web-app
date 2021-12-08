import React from "react";
import applyBoard from "../../assets/img/applyboard.jpeg"
import british_council from "../../assets/img/british_council.jpeg";

const OurPartners = () => {
	return (
		<div>
			<section className="upcoming-event-area section-gap">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="menu-content pb-70 col-lg-8">
							<div className="title text-center">
								<h1 className="mb-10">Trusted Partners</h1>
								<p>Clients who trust us enough to never turn our student down</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="active-upcoming-event-carusel">
							<div className="single-carusel row align-items-center">
								<div className="col-12 col-md-6 thumb">
									<img className="img-fluid" src={applyBoard} alt="ApplyBoard" />
								</div>
								<div className="detials col-12 col-md-6">
									{/* <p>25th February, 2018</p> */}
									<a href="/#">
										<h4>ApplyBoard</h4>
									</a>
									<p>
										FlyBox is officially a recruitment partner and is authorised to
										recruit international students for programs made available on our
										platform for the institution in countries that we represent
									</p>
								</div>
							</div>
							<div className="single-carusel row align-items-center">
								<div className="col-12 col-md-6 thumb">
									<img className="img-fluid" src={british_council} alt="British Council"/>
								</div>
								<div className="detials col-12 col-md-6">
									{/* <p>25th February, 2018</p> */}
									<a href="/#">
										<h4>British Council</h4>
									</a>
									<p>
										We are committed to working with quality agents who represent UK
										institutions, our work with FlyBox centred around promoting and
										supporting qualify professionalism and integrity.
									</p>
								</div>

								
							</div>

							<div className="single-carusel row align-items-center">
								<div className="col-12 col-md-6 thumb">
									<img className="img-fluid" src={applyBoard} alt="ApplyBoard" />
								</div>
								<div className="detials col-12 col-md-6">
									<a href="/#">
										<h4>Apply Board</h4>
									</a>
									<p>
										FlyBox is officially a recruitment partner and is authorised to
										recruit international students for programs made available on our
										platform for the institution in countries that we represent
									</p>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default OurPartners;
