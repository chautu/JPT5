import React, { Component } from "react";
class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="container ftco-section ftco-partner">
        <div className="container">
          <div className="row">
            <div className="col-sm ftco-animate fadeInUp ftco-animated">
              <a href="/" className="partner">
                <img
                  src="images/partner-1.png"
                  className="img-fluid"
                  alt="Colorlib Template"
                />
              </a>
            </div>
            <div className="col-sm ftco-animate fadeInUp ftco-animated">
              <a href="/" className="partner">
                <img
                  src="images/partner-2.png"
                  className="img-fluid"
                  alt="Colorlib Template"
                />
              </a>
            </div>
            <div className="col-sm ftco-animate fadeInUp ftco-animated">
              <a href="/" className="partner">
                <img
                  src="images/partner-3.png"
                  className="img-fluid"
                  alt="Colorlib Template"
                />
              </a>
            </div>
            <div className="col-sm ftco-animate fadeInUp ftco-animated">
              <a href="/" className="partner">
                <img
                  src="images/partner-4.png"
                  className="img-fluid"
                  alt="Colorlib Template"
                />
              </a>
            </div>
            <div className="col-sm ftco-animate fadeInUp ftco-animated">
              <a href="/" className="partner">
                <img
                  src="images/partner-5.png"
                  className="img-fluid"
                  alt="Colorlib Template"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Logo;
