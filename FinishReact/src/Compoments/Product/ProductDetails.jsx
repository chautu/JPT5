import React, { Component } from "react";
import Space from "../Space/Space";
import SendMail from "../SendMail/SendMail";
import { getApiProductDetails } from "../../Actions/ShowProductDetails";
import { connect } from "react-redux";
import "./ProductShow.css";
//import { Link } from "react-router-dom";
class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    var id = this.props.match.params.id;
    this.props.showproduct(id);
  }

  render() {
    console.log(this.props.product);
    const show = this.props.product;
    const isale =
      show.isSale === true ? (
        <p className="price">
          <span className="show-gia-goc">{show.price_show}</span>
          <span className="m-5">{show.price_sale_show}</span>
        </p>
      ) : (
        <p className="price">
          <span>$120.00</span>
        </p>
      );
    return (
      <>
        <section className="Product-details container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-5 ftco-animate fadeInUp ftco-animated">
                <a href={show.image} className="image-popup">
                  <img
                    src={show.image}
                    className="img-fluid"
                    alt="Colorlib Template"
                  />
                </a>
              </div>
              <div className="col-lg-6 product-details pl-md-5 ftco-animate fadeInUp ftco-animated">
                <h3>{show.title}</h3>
                <div className="rating d-flex">
                  <p className="text-left mr-4">
                    <a href="/#" className="mr-2">
                      5.0
                    </a>
                    <a href="/#">
                      <span className="ion-ios-star-outline"></span>
                    </a>
                    <a href="/#">
                      <span className="ion-ios-star-outline"></span>
                    </a>
                    <a href="/#">
                      <span className="ion-ios-star-outline"></span>
                    </a>
                    <a href="/#">
                      <span className="ion-ios-star-outline"></span>
                    </a>
                    <a href="/#">
                      <span className="ion-ios-star-outline"></span>
                    </a>
                  </p>
                  <p className="text-left mr-4">
                    <a href="/#" className="mr-2" style={{ color: "#000" }}>
                      100 <span style={{ color: "#bbb" }}>Rating</span>
                    </a>
                  </p>
                  <p className="text-left">
                    <a href="/#" className="mr-2" style={{ color: "#000" }}>
                      500 <span style={{ color: "#bbb" }}>Sold</span>
                    </a>
                  </p>
                </div>
                {isale}
                <p>{show.description}</p>
                <div className="row mt-4">
                  <div className="col-md-6">
                    <div className="form-group d-flex">
                      <div className="select-wrap">
                        <div className="icon">
                          <span className="ion-ios-arrow-down"></span>
                        </div>
                        <select name="" id="" className="form-control">
                          <option value="">Small</option>
                          <option value="">Medium</option>
                          <option value="">Large</option>
                          <option value="">Extra Large</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="w-100"></div>
                  <div className="input-group col-md-6 d-flex mb-3">
                    <span className="input-group-btn mr-2">
                      <button
                        onClick={() => {
                          let text = document.getElementById("quantity");
                          if (text.value === "1") return text.value;
                          return (text.value = parseInt(text.value) - 1);
                        }}
                        type="button"
                        className="quantity-left-minus btn"
                        data-type="minus"
                        data-field=""
                      >
                        <i className="ion-ios-remove"></i>
                      </button>
                    </span>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      className="form-control input-number"
                      defaultValue="1"
                      min="1"
                      max="100"
                    />

                    <span className="input-group-btn ml-2">
                      <button
                        onClick={() => {
                          let text = document.getElementById("quantity");
                          console.log(show.quatity_max);
                          if (text.value === show.quatity_max)
                            return text.value;
                          return (text.value = parseInt(text.value) + 1);
                        }}
                        type="button"
                        className="quantity-right-plus btn"
                        data-type="plus"
                        data-field=""
                      >
                        <i className="ion-ios-add"></i>
                      </button>
                    </span>
                  </div>
                  <div className="w-100"></div>
                  <div className="col-md-12">
                    <p style={{ color: "#000" }}>
                      {show.quatity_max}kg hiện có
                    </p>
                  </div>
                </div>
                <p>
                  <a href="/cart.html" className="btn btn-black py-3 px-5">
                    Add to Cart
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Space />
        {/* //   More Products */}
        {/* <div className="container">
          <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
              <span className="subheading">Products</span>
              <h2 className="mb-4">Related Products</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </div>
        </div> */}
        {/* Product */}
        {/* <div className="container">
          <div className="row">
            <ProductShow />
            <ProductShow />
            <ProductShow />
            <ProductShow />
          </div>
        </div> */}
        {/* SenMail */}
        <SendMail />
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    product: state.myProductDetails
  };
};
const mapDispatchToProps = (dispatch, prop) => {
  return {
    showproduct: id => {
      dispatch(getApiProductDetails(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
