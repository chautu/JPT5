import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Slide.css";
class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const Slide = this.props.slide;
    return (
      <section id="carouselId" className="carousel slide" data-ride="carousel">
        <div className="slide carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img src={Slide.image_1} alt="First slide" />
            <div className="slide-content carousel-caption d-none d-md-block">
              <h1 className="mb-2">{Slide.title_1}</h1>
              <h2 className="subheading mb-4">{Slide.content_1}</h2>
              <p>
                <Link to="/Shop/Category/0" className="btn btn-primary">
                  View Details
                </Link>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Slide.image_2} alt="Second slide" />
            <div className="slide-content carousel-caption d-none d-md-block">
              <h1 className="mb-2">{Slide.title_2}</h1>
              <h2 className="subheading mb-4">{Slide.content_2} </h2>
              <p>
                <Link to="/Blog" className="btn btn-primary">
                  View Details
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Slide;
