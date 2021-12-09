import React from "react";
import "./videoStyle.css";
import welcome_vid from "../../assets/img/Welcome.mp4";
import FlyBoxFees from "../flyBoxFees/FlyBoxFee";
import * as Icon from "react-bootstrap-icons";
import video from "./Welcome.webm";

const VideoPlayer = () => {
	return (
		<>
			<section className="showcase">
				<video autoPlay loop muted>
					<source src={welcome_vid} type="video/mp4" />
					<source src={video} type="video/webm" />
				</video>
				{/* <div className="overlay"></div> */}
				<div className="text">
					<h3>Your dreams are valid</h3>
					<div className="video-text">
						<h5>There is something here for everyone.</h5>
						<a href="/contact-us">Get In Tourch</a>
						<FlyBoxFees className="our-fees primary-btn text-uppercase" />
					</div>
				</div>
				<ul className="social">
					<li>
						<a
							href="https://www.facebook.com/flyboxtravelconsult/"
							target="_blank"
							rel="noreferrer"
						>
							<img src="https://i.ibb.co/x7P24fL/facebook.png" alt="" />
						</a>
					</li>
					<li>
						<a
							href="https://www.instagram.com/flyboxtravel/"
							target="_blank"
							rel="noreferrer"
						>
							<img src="https://i.ibb.co/ySwtH4B/instagram.png" alt="" />
						</a>
					</li>
					<li>
						<a href="https://wa.link/cmbwfj" target="_blank" rel="noreferrer">
							<Icon.Whatsapp size={45} />
						</a>
					</li>
				</ul>
			</section>
		</>
	);
};

export default VideoPlayer;
