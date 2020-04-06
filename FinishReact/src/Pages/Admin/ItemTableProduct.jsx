import React, { Component } from "react";

import { DelProduct } from "../../Actions/showAdmin";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class ItemTableProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const Product = this.props.product;
    console.log(Product);
    return (
      <>
        <tr className="admin-product">
          <td>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.props.deleteProduct(Product.id)}
            >
              <span className="ion-ios-close"></span>
            </button>
          </td>

          <td className="name-product">
            <p>{Product.name}</p>
          </td>

          <td className="image-product">
            <img src={Product.image} alt="cc" />
          </td>

          <td className="price-product">
            <p>{Product.price}</p>
          </td>
          <td className="price_sale-product">
            <p>{Product.price_sale}</p>
          </td>

          <td>
            <Link
              to={`/Product/${Product.id}`}
              type="button"
              className="btn btn-danger"
            >
              Details
            </Link>
          </td>
        </tr>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteProduct: id => {
      dispatch(DelProduct(id));
    }
  };
};
export default connect(null, mapDispatchToProps)(ItemTableProduct);
