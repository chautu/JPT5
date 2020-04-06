import React, { Component } from "react";
import ItemproductUser from "./ItemproductUser";

class CartUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.match);
    return (
      <>
        <section className="Cart container-fluid">
        
          <section className="ftco-section ftco-cart">
            <div className="container">
              <div className="row">
                <div className="col-md-12 ftco-animate fadeInUp ftco-animated">
                  <div className="cart-list">
                    <table className="table">
                      <thead className="thead-primary">
                        <tr className="text-center">
                          <th>&nbsp;</th>
                          <th>Product name</th>

                          <th>Quantity</th>
                          <th>Total</th>
                          <th>State</th>
                          <th>Cannel</th>
                        </tr>
                      </thead>
                      <tbody>
                        <ItemproductUser />
                        <ItemproductUser />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </>
    );
  }
}

export default CartUser;
