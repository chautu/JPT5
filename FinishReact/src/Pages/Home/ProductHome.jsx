import React, { Component } from "react";
import Space from "../../Compoments/Space/Space";
import ProductShow from "../../Compoments/Product/ProductShow";
import { connect } from "react-redux";
import { getApiProductHome } from "../../Actions/ShowHome";
class ProductHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.showProduct();
  }
  render() {
    const mapproduct =
      this.props.product != null ? (
        this.props.product.map((product, index) => (
          <ProductShow product={product} key={index} />
        ))
      ) : (
        <></>
      );
    return (
      <>
        <section className="ftco-section">
          <div className="ProductHome-text container text-center">
            <h6>Featured Products</h6>
            <h1>Our Products</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
          <Space />
          <div className="container">
            <div className="row">{mapproduct}</div>
          </div>
        </section>
      </>
    );
  }
}
const mapStateToProps = state => {
  return { product: state.myProductHome };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    showProduct: () => {
      dispatch(getApiProductHome());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductHome);
