import React, { Component } from "react";
class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="banner container-fluid align-items-md-center">
        <img src="images/bg_3.jpg" alt="banner" />
        <div className="banner-content algin-items-center ">
          <span className="subheading">Best Price For You</span>
          <h2 className="mb-4">Deal of the day</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
          <h3>
            <a href="/">Spinach</a>
            <div className="price">
              <a href="/"> $10 now $5 only</a>
            </div>
          </h3>
          <div id="timer" className="d-flex mt-5">
            <div className="banner-time time" id="days">
              43<span>Days</span>
            </div>
            <div className="banner-time time pl-3" id="hours">
              20<span>Hours</span>
            </div>
            <div className="banner-time time pl-3" id="minutes">
              44<span>Minutes</span>
            </div>
            <div className="banner-time time pl-3" id="seconds">
              36<span>Seconds</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
