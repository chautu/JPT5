import React, { Component } from "react";
import "./ProductShow.css";
import { Link } from "react-router-dom";

class Product_show extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const product = this.props.product;
    const noSale = (
      <div className="product-show col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
        <div className="product ">
          <Link to={`/Product/${product.id}`} className="img-prod">
            <img
              className="img-fluid"
              src={product.image}
              alt="Colorlib Template"
            />
            <div className="overlay"></div>
          </Link>
          <div className="text py-3 pb-4 px-3 text-center">
            <h3>
              <Link to={`/Product/${product.id}`}>{product.title}</Link>
            </h3>
            <div className="d-flex">
              <div className="pricing">
                <p className="price">
                  <span>{product.price_show}</span>
                </p>
              </div>
            </div>
            <div className="bottom-area d-flex px-3">
              <div className="m-auto d-flex">
                <Link
                  to="/#"
                  className="add-to-cart d-flex justify-content-center align-items-center text-center"
                >
                  <span>
                    <i className="ion-ios-menu"></i>
                  </span>
                </Link>
                <Link
                  to="/#"
                  className="buy-now d-flex justify-content-center align-items-center mx-1"
                >
                  <span>
                    <i className="ion-ios-cart"></i>
                  </span>
                </Link>
                <Link
                  to="/#"
                  className="heart d-flex justify-content-center align-items-center "
                >
                  <span>
                    <i className="ion-ios-heart"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    const Sale = (
      <div className="product-show  col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
        <div className="product">
          <Link to={`/Product/${product.id}`} className="img-prod">
            <img
              className="img-fluid"
              src={product.image}
              alt="Colorlib Template"
              width="100%"
            />
            <span className="status">{product.sale}</span>
            <div className="overlay"></div>
          </Link>
          <div className="text py-3 pb-4 px-3 text-center">
            <h3>
              <Link to={`/Product/${product.id}`}>{product.title}</Link>
            </h3>
            <div className="d-flex">
              <div className="pricing">
                <p className="price">
                  <span className=" mr-2 price-dc">{product.price_show}</span>
                  <span className="price-sale">{product.price_sale_show}</span>
                </p>
              </div>
            </div>
            <div className="bottom-area d-flex px-3">
              <div className="m-auto d-flex">
                <Link
                  to="/#"
                  className="add-to-cart d-flex justify-content-center align-items-center text-center"
                >
                  <span>
                    <i className="ion-ios-menu"></i>
                  </span>
                </Link>
                <Link
                  to="/#"
                  className="buy-now d-flex justify-content-center align-items-center mx-1"
                >
                  <span>
                    <i className="ion-ios-cart"></i>
                  </span>
                </Link>
                <Link
                  to="/#"
                  className="heart d-flex justify-content-center align-items-center "
                >
                  <span>
                    <i className="ion-ios-heart"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    const Show = product.isSale === true ? Sale : noSale;
    return <>{Show}</>;
  }
}

export default Product_show;
