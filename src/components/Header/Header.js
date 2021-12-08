import React from 'react'
import NavBar from '../NavBar/NavBar'
// import * as Icon from 'react-bootstrap-icons'

const Header = () => {
  return (
			<>
				<header id="header">
					{/* <div className="header-top">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 col-sm-6 col-8 header-top-left no-padding">
									<ul>
										<a
											href="https://www.facebook.com/flyboxtravelconsult/"
											target="_blank"
											rel="noreferrer"
										>
											<Icon.Facebook size={25} style={{ marginRight: "1.5em" }} />
										</a>
										<a
											href="https://www.instagram.com/flyboxtravel/"
											target="_blank"
											rel="noreferrer"
										>
											<Icon.Instagram
												size={25}
												style={{ marginRight: "1.5em", color: "orange" }}
											/>
										</a>
										<li>
											<a href="https://wa.link/cmbwfj" target="_blank" rel="noreferrer">
												<Icon.Whatsapp size={25} />
											</a>
										</li>
									</ul>
								</div>

								<div className="col-lg-6 col-sm-6 col-4 header-top-right no-padding">
									<a
										href="tel:+234 802 104 6058"
										size={25}
										style={{ textDecoration: "none" }}
									>
										<span className="lnr lnr-phone-handset" />{" "}
										<span className="text">+234 812 568 8291</span>
									</a>
								</div>
							</div>
						</div>
					</div> */}
					<NavBar />
				</header>

				{/* 5572 */}
			</>
		);
}

export default Header
