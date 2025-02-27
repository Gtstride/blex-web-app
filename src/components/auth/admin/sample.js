import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const AdminLoginPage = () => {
  return (
    <>
      <section className="banner-area relative about-banner" id="home">
        <div className="overlay overlay-bg" />
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content col-lg-12">
              <h1 className="text-white">Elements</h1>
              <p className="text-white link-nav">
                <a href="/">Home </a>{" "}
                <span className="lnr lnr-arrow-right" />{" "}
                <a href="/admin"> Admin Login</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      
      <div className="whole-wrap">
        <div className="container">


          <div className="section-top-border">
            <h3 className="mb-30">Definition</h3>
            <div className="row">
              <div className="col-md-4">
                <div className="single-defination">
                  <h4 className="mb-20">Definition 01</h4>
                  <p>
                    Recently, the US Federal government banned online casinos from
                    operating in America by making it illegal to transfer money to
                    them through any US bank or payment system. As a result of this
                    law, most of the popular online casino networks
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-defination">
                  <h4 className="mb-20">Definition 02</h4>
                  <p>
                    Recently, the US Federal government banned online casinos from
                    operating in America by making it illegal to transfer money to
                    them through any US bank or payment system. As a result of this
                    law, most of the popular online casino networks
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-defination">
                  <h4 className="mb-20">Definition 03</h4>
                  <p>
                    Recently, the US Federal government banned online casinos from
                    operating in America by making it illegal to transfer money to
                    them through any US bank or payment system. As a result of this
                    law, most of the popular online casino networks
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section-top-border">
            <h3 className="mb-30">Block Quotes</h3>
            <div className="row">
              <div className="col-lg-12">
                <blockquote className="generic-blockquote">
                  “Recently, the US Federal government banned online casinos from
                  operating in America by making it illegal to transfer money to
                  them through any US bank or payment system. As a result of this
                  law, most of the popular online casino networks such as Party
                  Gaming and PlayTech left the United States. Overnight, online
                  casino players found themselves being chased by the Federal
                  government. But, after a fortnight, the online casino industry
                  came up with a solution and new online casinos started taking
                  root. These began to operate under a different business umbrella,
                  and by doing that, rendered the transfer of money to and from them
                  legal. A major part of this was enlisting electronic banking
                  systems that would accept this new clarification and start doing
                  business with me. Listed in this article are the electronic
                  banking”
                </blockquote>
              </div>
            </div>
          </div>
          <div className="section-top-border">
            <h3 className="mb-30">Table</h3>
            <div className="progress-table-wrap">
              <div className="progress-table">
                <div className="table-head">
                  <div className="serial">#</div>
                  <div className="country">Countries</div>
                  <div className="visit">Visits</div>
                  <div className="percentage">Percentages</div>
                </div>
                <div className="table-row">
                  <div className="serial">01</div>
                  <div className="country">
                    {" "}
                    <img src="img/elements/f1.jpg" alt="flag" />
                    Canada
                  </div>
                  <div className="visit">645032</div>
                  <div className="percentage">
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
                <div className="table-row">
                  <div className="serial">02</div>
                  <div className="country">
                    {" "}
                    <img src="img/elements/f2.jpg" alt="flag" />
                    Canada
                  </div>
                  <div className="visit">645032</div>
                  <div className="percentage">
                    <div className="progress">
                      <div
                        className="progress-bar color-2"
                        role="progressbar"
                        style={{ width: "30%" }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
                <div className="table-row">
                  <div className="serial">03</div>
                  <div className="country">
                    {" "}
                    <img src="img/elements/f3.jpg" alt="flag" />
                    Canada
                  </div>
                  <div className="visit">645032</div>
                  <div className="percentage">
                    <div className="progress">
                      <div
                        className="progress-bar color-3"
                        role="progressbar"
                        style={{ width: "55%" }}
                        aria-valuenow={55}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
                <div className="table-row">
                  <div className="serial">04</div>
                  <div className="country">
                    {" "}
                    <img src="img/elements/f4.jpg" alt="flag" />
                    Canada
                  </div>
                  <div className="visit">645032</div>
                  <div className="percentage">
                    <div className="progress">
                      <div
                        className="progress-bar color-4"
                        role="progressbar"
                        style={{ width: "60%" }}
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
                <div className="table-row">
                  <div className="serial">05</div>
                  <div className="country">
                    {" "}
                    <img src="img/elements/f5.jpg" alt="flag" />
                    Canada
                  </div>
                  <div className="visit">645032</div>
                  <div className="percentage">
                    <div className="progress">
                      <div
                        className="progress-bar color-5"
                        role="progressbar"
                        style={{ width: "40%" }}
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
                <div className="table-row">
                  <div className="serial">06</div>
                  <div className="country">
                    {" "}
                    <img src="img/elements/f6.jpg" alt="flag" />
                    Canada
                  </div>
                  <div className="visit">645032</div>
                  <div className="percentage">
                    <div className="progress">
                      <div
                        className="progress-bar color-6"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow={70}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
                <div className="table-row">
                  <div className="serial">07</div>
                  <div className="country">
                    {" "}
                    <img src="img/elements/f7.jpg" alt="flag" />
                    Canada
                  </div>
                  <div className="visit">645032</div>
                  <div className="percentage">
                    <div className="progress">
                      <div
                        className="progress-bar color-7"
                        role="progressbar"
                        style={{ width: "30%" }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
                <div className="table-row">
                  <div className="serial">08</div>
                  <div className="country">
                    {" "}
                    <img src="img/elements/f8.jpg" alt="flag" />
                    Canada
                  </div>
                  <div className="visit">645032</div>
                  <div className="percentage">
                    <div className="progress">
                      <div
                        className="progress-bar color-8"
                        role="progressbar"
                        style={{ width: "60%" }}
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-top-border">
            <h3>Image Gallery</h3>
            <div className="row gallery-item">
              <div className="col-md-4">
                <a href="img/elements/g1.jpg" className="img-gal">
                  <div
                    className="single-gallery-image"
                    style={{ background: "url(img/elements/g1.jpg)" }}
                  />
                </a>
              </div>
              <div className="col-md-4">
                <a href="img/elements/g2.jpg" className="img-gal">
                  <div
                    className="single-gallery-image"
                    style={{ background: "url(img/elements/g2.jpg)" }}
                  />
                </a>
              </div>
              <div className="col-md-4">
                <a href="img/elements/g3.jpg" className="img-gal">
                  <div
                    className="single-gallery-image"
                    style={{ background: "url(img/elements/g3.jpg)" }}
                  />
                </a>
              </div>
              <div className="col-md-6">
                <a href="img/elements/g4.jpg" className="img-gal">
                  <div
                    className="single-gallery-image"
                    style={{ background: "url(img/elements/g4.jpg)" }}
                  />
                </a>
              </div>
              <div className="col-md-6">
                <a href="img/elements/g5.jpg" className="img-gal">
                  <div
                    className="single-gallery-image"
                    style={{ background: "url(img/elements/g5.jpg)" }}
                  />
                </a>
              </div>
              <div className="col-md-4">
                <a href="img/elements/g6.jpg" className="img-gal">
                  <div
                    className="single-gallery-image"
                    style={{ background: "url(img/elements/g6.jpg)" }}
                  />
                </a>
              </div>
              <div className="col-md-4">
                <a href="img/elements/g7.jpg" className="img-gal">
                  <div
                    className="single-gallery-image"
                    style={{ background: "url(img/elements/g7.jpg)" }}
                  />
                </a>
              </div>
              <div className="col-md-4">
                <a href="img/elements/g8.jpg" className="img-gal">
                  <div
                    className="single-gallery-image"
                    style={{ background: "url(img/elements/g8.jpg)" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="section-top-border">
            <div className="row">
              <div className="col-md-4 typo-sec">
                <h3 className="mb-20">Typography</h3>
                <div className="typography">
                  <h1 className="typo-list">This is header 01</h1>
                  <h2 className="typo-list">This is header 02</h2>
                  <h3 className="typo-list">This is header 03</h3>
                  <h4 className="typo-list">This is header 04</h4>
                  <h5 className="typo-list">This is header 01</h5>
                  <h6 className="typo-list">This is header 01</h6>
                </div>
              </div>
              <div className="col-md-4 mt-sm-30 typo-sec">
                <h3 className="mb-20">Unordered List</h3>
                <div className>
                  <ul className="unordered-list">
                    <li>Fta Keys</li>
                    <li>For Women Only Your Computer Usage</li>
                    <li>
                      Facts Why Inkjet Printing Is Very Appealing
                      <ul>
                        <li>
                          Addiction When Gambling Becomes
                          <ul>
                            <li>Protective Preventative Maintenance</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>Dealing With Technical Support 10 Useful Tips</li>
                    <li>Make Myspace Your Best Designed Space</li>
                    <li>Cleaning And Organizing Your Computer</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 mt-sm-30 typo-sec">
                <h3 className="mb-20">Ordered List</h3>
                <div className>
                  <ol className="ordered-list">
                    <li>
                      <span>Fta Keys</span>
                    </li>
                    <li>
                      <span>For Women Only Your Computer Usage</span>
                    </li>
                    <li>
                      <span>Facts Why Inkjet Printing Is Very Appealing</span>
                      <ol className="ordered-list-alpha">
                        <li>
                          <span>Addiction When Gambling Becomes</span>
                          <ol className="ordered-list-roman">
                            <li>
                              <span>Protective Preventative Maintenance</span>
                            </li>
                          </ol>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <span>Dealing With Technical Support 10 Useful Tips</span>
                    </li>
                    <li>
                      <span>Make Myspace Your Best Designed Space</span>
                    </li>
                    <li>
                      <span>Cleaning And Organizing Your Computer</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="section-top-border">
            <div className="row">
              <div className="col-lg-8 col-md-8">
                <h3 className="mb-30">Form Element</h3>
                <form action="#">
                  <div className="mt-10">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'First Name'"
                      required
                      className="single-input"
                    />
                  </div>
                  <div className="mt-10">
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Last Name'"
                      required
                      className="single-input"
                    />
                  </div>
                  <div className="mt-10">
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Last Name'"
                      required
                      className="single-input"
                    />
                  </div>
                  <div className="mt-10">
                    <input
                      type="email"
                      name="EMAIL"
                      placeholder="Email address"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Email address'"
                      required
                      className="single-input"
                    />
                  </div>
                  <div className="input-group-icon mt-10">
                    <div className="icon">
                      <i className="fa fa-thumb-tack" aria-hidden="true" />
                    </div>
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Address'"
                      required
                      className="single-input"
                    />
                  </div>
                  <div className="input-group-icon mt-10">
                    <div className="icon">
                      <i className="fa fa-plane" aria-hidden="true" />
                    </div>
                    <div className="form-select" id="default-select">
                      <select>
                        <option value={1}>City</option>
                        <option value={1}>Dhaka</option>
                        <option value={1}>Dilli</option>
                        <option value={1}>Newyork</option>
                        <option value={1}>Islamabad</option>
                      </select>
                    </div>
                  </div>
                  <div className="input-group-icon mt-10">
                    <div className="icon">
                      <i className="fa fa-globe" aria-hidden="true" />
                    </div>
                    <div className="form-select" id="default-select2">
                      <select>
                        <option value={1}>Country</option>
                        <option value={1}>Bangladesh</option>
                        <option value={1}>India</option>
                        <option value={1}>England</option>
                        <option value={1}>Srilanka</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-10">
                    <textarea
                      className="single-textarea"
                      placeholder="Message"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Message'"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="mt-10">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="Primary color"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Primary color'"
                      required
                      className="single-input-primary"
                    />
                  </div>
                  <div className="mt-10">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="Accent color"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Accent color'"
                      required
                      className="single-input-accent"
                    />
                  </div>
                  <div className="mt-10">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="Secondary color"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Secondary color'"
                      required
                      className="single-input-secondary"
                    />
                  </div>
                </form>
              </div>
              <div className="col-lg-3 col-md-4 mt-sm-30 element-wrap">
                <div className="single-element-widget">
                  <h3 className="mb-30">Switches</h3>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>01. Sample Switch</p>
                    <div className="primary-switch">
                      <input type="checkbox" id="default-switch" />
                      <label htmlFor="default-switch" />
                    </div>
                  </div>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>02. Primary Color Switch</p>
                    <div className="primary-switch">
                      <input type="checkbox" id="primary-switch" defaultChecked />
                      <label htmlFor="primary-switch" />
                    </div>
                  </div>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>03. Confirm Color Switch</p>
                    <div className="confirm-switch">
                      <input type="checkbox" id="confirm-switch" defaultChecked />
                      <label htmlFor="confirm-switch" />
                    </div>
                  </div>
                </div>
                <div className="single-element-widget">
                  <h3 className="mb-30">Selectboxes</h3>
                  <div className="default-select" id="default-select">
                    <select>
                      <option value={1}>English</option>
                      <option value={1}>Spanish</option>
                      <option value={1}>Arabic</option>
                      <option value={1}>Portuguise</option>
                      <option value={1}>Bengali</option>
                    </select>
                  </div>
                </div>
                <div className="single-element-widget">
                  <h3 className="mb-30">Checkboxes</h3>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>01. Sample Checkbox</p>
                    <div className="primary-checkbox">
                      <input type="checkbox" id="default-checkbox" />
                      <label htmlFor="default-checkbox" />
                    </div>
                  </div>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>02. Primary Color Checkbox</p>
                    <div className="primary-checkbox">
                      <input type="checkbox" id="primary-checkbox" defaultChecked />
                      <label htmlFor="primary-checkbox" />
                    </div>
                  </div>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>03. Confirm Color Checkbox</p>
                    <div className="confirm-checkbox">
                      <input type="checkbox" id="confirm-checkbox" />
                      <label htmlFor="confirm-checkbox" />
                    </div>
                  </div>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>04. Disabled Checkbox</p>
                    <div className="disabled-checkbox">
                      <input type="checkbox" id="disabled-checkbox" disabled />
                      <label htmlFor="disabled-checkbox" />
                    </div>
                  </div>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>05. Disabled Checkbox active</p>
                    <div className="disabled-checkbox">
                      <input
                        type="checkbox"
                        id="disabled-checkbox-active"
                        defaultChecked
                        disabled
                      />
                      <label htmlFor="disabled-checkbox-active" />
                    </div>
                  </div>
                </div>
                <div className="single-element-widget">
                  <h3 className="mb-30">Radios</h3>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>01. Sample radio</p>
                    <div className="primary-radio">
                      <input type="checkbox" id="default-radio" />
                      <label htmlFor="default-radio" />
                    </div>
                  </div>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>02. Primary Color radio</p>
                    <div className="primary-radio">
                      <input type="checkbox" id="primary-radio" defaultChecked />
                      <label htmlFor="primary-radio" />
                    </div>
                  </div>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>03. Confirm Color radio</p>
                    <div className="confirm-radio">
                      <input type="checkbox" id="confirm-radio" defaultChecked />
                      <label htmlFor="confirm-radio" />
                    </div>
                  </div>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>04. Disabled radio</p>
                    <div className="disabled-radio">
                      <input type="checkbox" id="disabled-radio" disabled />
                      <label htmlFor="disabled-radio" />
                    </div>
                  </div>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>05. Disabled radio active</p>
                    <div className="disabled-radio">
                      <input
                        type="checkbox"
                        id="disabled-radio-active"
                        defaultChecked
                        disabled
                      />
                      <label htmlFor="disabled-radio-active" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4>Top Products</h4>
                <ul>
                  <li>
                    <a href="#">Managed Website</a>
                  </li>
                  <li>
                    <a href="#">Manage Reputation</a>
                  </li>
                  <li>
                    <a href="#">Power Tools</a>
                  </li>
                  <li>
                    <a href="#">Marketing Service</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4>Quick links</h4>
                <ul>
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">Brand Assets</a>
                  </li>
                  <li>
                    <a href="#">Investor Relations</a>
                  </li>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4>Features</h4>
                <ul>
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">Brand Assets</a>
                  </li>
                  <li>
                    <a href="#">Investor Relations</a>
                  </li>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4>Resources</h4>
                <ul>
                  <li>
                    <a href="#">Guides</a>
                  </li>
                  <li>
                    <a href="#">Research</a>
                  </li>
                  <li>
                    <a href="#">Experts</a>
                  </li>
                  <li>
                    <a href="#">Agencies</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4>Newsletter</h4>
                <p>Stay update with our latest</p>
                <div className id="mc_embed_signup">
                  <form
                    target="_blank"
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
                  >
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="EMAIL"
                        placeholder="Enter Email Address"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Email Address '"
                        required
                      />
                      <div className="input-group-btn">
                        <button className="btn btn-default" type="submit">
                          <span className="lnr lnr-arrow-right" />
                        </button>
                      </div>
                      <div className="info" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom row align-items-center justify-content-between">
            <p className="footer-text m-0 col-lg-6 col-md-12">
              Copyright © All rights reserved | This template is made with{" "}
              <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
              <a href="https://colorlib.com/" target="_blank">
                Colorlib
              </a>
            </p>
            <div className="col-lg-6 col-sm-12 footer-social">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-dribbble" />
              </a>
              <a href="#">
                <i className="fa fa-behance" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>

  );
};

export default AdminLoginPage;