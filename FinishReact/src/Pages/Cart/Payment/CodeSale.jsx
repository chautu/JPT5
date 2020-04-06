import React, { Component } from "react";
import { Link } from "react-router-dom";

class CodeSale extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-lg-4 mt-5 cart-wrap ftco-animate fadeInUp ftco-animated">
        <div className="cart-total mb-3">
          <h3>Coupon Code</h3>
          <p>Enter your coupon code if you have one</p>
          <form action="#" className="info">
            <div className="form-group">
              <label name="">Coupon code</label>
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
            Apply Coupon
          </Link>
        </p>
      </div>
    );
  }
}

export default CodeSale;
