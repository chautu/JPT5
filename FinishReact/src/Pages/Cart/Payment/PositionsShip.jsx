import React, { Component } from "react";
import { Link } from "react-router-dom";

class PositionsShip extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-lg-4 mt-5 cart-wrap ftco-animate fadeInUp ftco-animated">
        <div className="cart-total mb-3">
          <h3>Estimate shipping and tax</h3>
          <p>Enter your destination to get a shipping estimate</p>
          <form action="#" className="info">
            <div className="form-group">
              <label name="">Country</label>
              <input
                type="text"
                className="form-control text-left px-3"
                placeholder=""
              />
            </div>
            <div className="form-group">
              <label name="country">State/Province</label>
              <input
                type="text"
                className="form-control text-left px-3"
                placeholder=""
              />
            </div>
            <div className="form-group">
              <label name="country">Zip/Postal Code</label>
              <input
                type="text"
                className="form-control text-left px-3"
                placeholder=""
              />
            </div>
          </form>
        </div>
        <p>
          <Link to="/checkout.html" className="btn btn-primary py-3 px-4">
            Estimate
          </Link>
        </p>
      </div>
    );
  }
}

export default PositionsShip;
