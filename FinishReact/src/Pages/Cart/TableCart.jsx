import React, { Component } from "react";
import { connect } from "react-redux";
import { getApiProductCart } from "../../Actions/Bill";
import CartItems from "./CartItems";
class TableCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    if (this.props.string !== null) {
      const id = this.props.string;
      this.props.getProduct(id);
    }
  }
  render() {
    let showBill = <></>;
    if (this.props.userCart.length > 0) {
      let temp = this.props.userCart.map((cart, index1) => {
        if (this.props.product.length > 0) {
          this.props.product.map((product, index2) => {
            if (cart.id_product === product.id) console.log(product.id);
            return (
              <CartItems
                key={index2}
                quatity={cart.quatity}
                product={product}
              />
            );
            return <tr key={index2}></tr>;
          });
        }
        return <tr key={index1}></tr>;
      });
      showBill = temp;
    }
    return <>{showBill}</>;
  }
}
const mapStateToProps = state => {
  return {
    product: state.myProductCart
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    getProduct: id => {
      dispatch(getApiProductCart(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableCart);
