import React, { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="ftco-footer ftco-section">
        <div className="container">
          {/* <div className="row">
            <div className="mouse">
              <Link to={window.location.pathname} className="mouse-icon">
                <div className="mouse-wheel">
                  <span className="ion-ios-arrow-up"></span>
                </div>
              </Link>
            </div>
          </div> */}
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Vegefoods</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li className="ftco-animate fadeInUp ftco-animated">
                    <Link to="http://wwww.facebook.com">
                      <span className="icon-twitter"></span>
                    </Link>
                  </li>
                  <li className="ftco-animate fadeInUp ftco-animated">
                    <Link to="http://wwww.facebook.com">
                      <span className="icon-facebook"></span>
                    </Link>
                  </li>
                  <li className="ftco-animate fadeInUp ftco-animated">
                    <Link to="http://wwww.facebook.com">
                      <span className="icon-instagram"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Menu</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/Shop" className="py-2 d-block">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link to="/About" className="py-2 d-block">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/Blog" className="py-2 d-block">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/Contact" className="py-2 d-block">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Help</h2>
                <div className="d-flex">
                  <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                    <li>
                      <Link to="/" className="py-2 d-block">
                        Shipping Information
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="py-2 d-block">
                        Returns &amp; Exchange
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="py-2 d-block">
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="py-2 d-block">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/" className="py-2 d-block">
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link to="/Contact" className="py-2 d-block">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon icon-map-marker"></span>
                      <span className="text">
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </span>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="icon icon-phone"></span>
                        <span className="text">+2 392 3929 210</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="icon icon-envelope"></span>
                        <span className="text">info@yourdomain.com</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center"></div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
