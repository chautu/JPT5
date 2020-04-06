import React, { Component } from "react";
import Slide from "./../../Compoments/Slide/Slide";
import Payment from "./Payment";
import { connect } from "react-redux";
import {
  getApiSlideCart,
  getApiUserCart,
  getApiProductCart
} from "../../Actions/Bill";
import TableCart from "./TableCart";
class Bill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getProduct: ""
    };
  }
  componentDidMount() {
    try {
      const UserLogin =
        window.localStorage.getItem("Login").length > 3
          ? JSON.parse(window.localStorage.getItem("Login"))
          : "";
      if (UserLogin.data.id !== undefined) {
        this.props.getUser(UserLogin.data.id);
      }
    } catch (err) {
      alert("bạn phải đăng nhập");
    }

    this.props.showSlide();
    if (this.props.userCart.length > 0)
      this.props.userCart.map((item, index) =>
        this.props.getProduct(item.id_product, this.props.product)
      );
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.userCart.length > 0) {
      let string = "id=" + nextProps.userCart[0].id_product;
      for (let i = 1; i < nextProps.userCart.length; i++) {
        string += "&id=" + nextProps.userCart[i].id_product;
      }
      return {
        getProduct: string
      };
    }
    return {};
  }

  render() {
    console.log(this.state.product);
    const showSlide =
      this.props.slide.id !== undefined ? (
        <Slide slide={this.props.slide} />
      ) : (
        <></>
      );
    const showTable =
      this.state.getProduct.length > 0 ? (
        <TableCart
          string={this.state.getProduct}
          userCart={this.props.userCart}
        />
      ) : (
        <></>
      );
    return (
      <>
        <section className="Cart container-fluid">
          {showSlide}
          <section className="ftco-section ftco-cart">
            <div className="container">
              <div className="row">
                <div className="col-md-12 ftco-animate fadeInUp ftco-animated">
                  <div className="cart-list">
                    <table className="table">
                      <thead className="thead-primary">
                        <tr className="text-center">
                          <th>&nbsp;</th>
                          <th>&nbsp;</th>
                          <th>Product name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>{showTable}</tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <Payment />
              </div>
            </div>
          </section>
        </section>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    slide: state.mySlideCart,
    userCart: state.myUserCart,
    product: state.myProductCart
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    showSlide: () => {
      dispatch(getApiSlideCart());
    },
    getUser: id => {
      dispatch(getApiUserCart(id));
    },
    getProduct: (id, data) => {
      dispatch(getApiProductCart(id, data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bill);
