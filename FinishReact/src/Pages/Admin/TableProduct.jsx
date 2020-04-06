import React, { Component } from "react";
import ItemTableProduct from "./ItemTableProduct";
import { Link } from "react-router-dom";
import { getApiCategoryShop, getApiProductShop } from "../../Actions/ShowShop";
import { connect } from "react-redux";
class TableProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.showCategory();
    this.props.showProduct(0);
  }
  onChange = event => {
    this.props.showProduct(event.target.value);
  };
  render() {
    let category = <></>;
    if (this.props.category.length > 0) {
      category = this.props.category.map((category, index) => (
        <option key={index} value={category.id}>
          {category.name}
        </option>
      ));
    }

    const showProduct =
      this.props.product.length > 0 ? (
        this.props.product.map((temp, index) => (
          <ItemTableProduct product={temp} key={index} />
        ))
      ) : (
        <></>
      );

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-2">
              <Link
                to={`${this.props.match.url}/add-product`}
                className="btn btn-warning"
              >
                AddProduct
              </Link>
            </div>
            <div className="col-md-8">
              <div className="form-group">
                <label>Category</label>
                <select
                  onChange={this.onChange}
                  name="id_Category"
                  className="form-control"
                >
                  {category}
                </select>
              </div>
            </div>
          </div>
        </div>
        <section className="Admin container">
          <section className="ftco-section ftco-Admin">
            <div className="container">
              <div className="row">
                <div className="col-md-12 ftco-animate fadeInUp ftco-animated">
                  <div className="Admin-list">
                    <table className="table">
                      <thead className="thead-primary">
                        <tr className="text-center">
                          <th>Delete</th>
                          <th>Name</th>
                          <th>Image</th>
                          <th>Price</th>
                          <th>Price Sale</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>{showProduct}</tbody>
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
const mapStateToProps = state => {
  return {
    category: state.myCategoryShop,
    product: state.myProductShop
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    showCategory: () => {
      dispatch(getApiCategoryShop());
    },
    showProduct: id => {
      dispatch(getApiProductShop(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableProduct);
