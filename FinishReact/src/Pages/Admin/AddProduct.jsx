import React, { Component } from "react";

import { connect } from "react-redux";
import { getApiCategoryShop, getApiProductShop } from "../../Actions/ShowShop";
import { PostProduct } from "../../Actions/showAdmin";
class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      image: "",
      description: "",
      isSale: false,
      sale: "",
      price_show: "",
      price: "",
      price_sale_show: "",
      price_sale: "",
      quatity_max: "600",
      id_Category: ""
    };
  }
  componentDidMount() {
    this.props.showCategory();
    this.props.showProduct(0);
  }
  onChange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  };
  onAdd = () => {
    let id = "";
    if (this.props.product.length > 0) id = this.props.product.length + 1;

    let isSale = false;
    if (this.props.product.sale !== null) isSale = true;

    let price_show = "$" + this.state.price;
    let price_sale_show = "";
    let price_sale = 0;
    if ((isSale = true)) {
      price_sale =
        parseFloat(this.state.price) * (1 - parseFloat(this.state.sale));
      console.log(1 - parseFloat(this.state.sale));
      price_sale_show = "$" + price_sale;
    }
    let sale = (parseFloat(this.state.sale) * 100).toString() + "%";

    const obj = {
      id: id,
      title: this.state.title,
      image: this.state.image,
      description: this.state.description,
      price: this.state.price,
      isSale: isSale,
      quatity_max: this.state.quatity_max,
      id_Category: this.state.id_Category,
      HomeFlg: true,
      price_show: price_show,
      price_sale_show: price_sale_show,
      price_sale: price_sale,
      sale: sale
    };
    this.props.getProduct(obj);
  };
  render() {
    console.log(this.state);
    let category = <></>;
    if (this.props.category.length > 0) {
      category = this.props.category.map((category, index) => (
        <option key={index} value={category.id}>
          {category.name}
        </option>
      ));
    }
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <form>
                <div className="form-group">
                  <label>Name :</label>
                  <input
                    onChange={this.onChange}
                    name="title"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <label>Image :</label>
                  <input
                    onChange={this.onChange}
                    name="image"
                    type="text"
                    className="form-control"
                    placeholder="Link"
                  />
                </div>

                <div className="form-group">
                  <label>Price :</label>
                  <input
                    onChange={this.onChange}
                    name="price"
                    type="number"
                    className="form-control"
                    placeholder="Price"
                  />
                </div>
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
                <div className="form-group">
                  <label>% Sale</label>
                  <select
                    name="sale"
                    className="form-control"
                    onChange={this.onChange}
                  >
                    <option value=""></option>
                    <option value="0.25">25%</option>
                    <option value="0.5">50%</option>
                    <option value="0.75">75%</option>
                    <option value="1">Free</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Description :</label>
                  <textarea
                    onChange={this.onChange}
                    name="description"
                    className="form-control"
                    rows="3"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="col-md-2"></div>
          </div>
          <br></br>
          <div className="row">
            <div className="col-md-12 text-center">
              <button onClick={this.onAdd} className="btn btn-danger">
                Add
              </button>
            </div>
          </div>
        </div>
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
    },
    getProduct: obj => {
      dispatch(PostProduct(obj));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
