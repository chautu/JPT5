import React, { Component } from "react";
import { Link } from "react-router-dom";

class Total extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-lg-4 mt-5 cart-wrap ftco-animate fadeInUp ftco-animated">
        <div className="cart-total mb-3">
          <h3>Cart Totals</h3>
          <p className="d-flex">
            <span>Subtotal</span>
            <span>$20.60</span>
          </p>
          <p className="d-flex">
            <span>Delivery</span>
            <span>$0.00</span>
          </p>
          <p className="d-flex">
            <span>Discount</span>
            <span>$3.00</span>
          </p>
          <hr />
          <p className="d-flex total-price">
            <span>Total</span>
            <span>$17.60</span>
          </p>
        </div>
        <p>
          <Link to="/checkout" className="btn btn-primary py-3 px-4">
            Proceed to Checkout
          </Link>
        </p>
      </div>
    );
  }
}

export default Total;
