import React, { Component } from "react";
import Productshow from "../../Compoments/Product/ProductShow";
import { connect } from "react-redux";

import { getApiProductShop } from "../../Actions/ShowShop";

class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.showProduct(id);
  }

  render() {
    const products =
      this.props.myProduct != null ? (
        this.props.myProduct.map((product, index) => (
          <Productshow key={index} product={product} />
        ))
      ) : (
        <></>
      );
    return <>{products}</>;
  }
}
const mapStateToProps = state => {
  return {
    myProduct: state.myProductShop
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    showProduct: id => {
      dispatch(getApiProductShop(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
