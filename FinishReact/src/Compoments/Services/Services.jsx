import React, { Component } from "react";
import "./Services.css";
class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const Services = (className, h3, p, bgcolor) => (
      <div className="servicers col-sm text-center ">
        <div
          className="img-servicers text-center "
          style={{ backgroundColor: `${bgcolor}` }}
        >
          <span className={`Category-fontawesome ${className}`}></span>
        </div>
        <div className="content-services">
          <h3 className="heading">{h3}</h3>
          <span>{p}</span>
        </div>
      </div>
    );
    return (
      <section>
        <div className="Cateogry container">
          <div className="Category row justify-content-md-center ">
            {Services(
              "flaticon-shipped",
              "Free Shipping",
              "On order over $100",
              "#e4b2d6"
            )}
            {Services(
              "flaticon-diet",
              "Always Fresh",
              "Product well package",
              "#dcc698"
            )}
            {Services(
              "flaticon-award",
              "Superior Quality",
              "Quality Products",
              "#a2d1e1"
            )}
            {Services(
              "flaticon-customer-service",
              "Support",
              "24/7 Support",
              "#dcd691"
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
