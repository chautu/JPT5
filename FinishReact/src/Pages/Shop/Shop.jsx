import React, { Component } from "react";
import "./Shop.css";
import Slide from "../../Compoments/Slide/Slide";
import Space from "../../Compoments/Space/Space";
import ListCategory from "./ListCategory";
import ListProduct from "./ListProduct";
import { Route, Switch } from "react-router-dom";
import { getApiCategoryShop, getApiSlideShop } from "../../Actions/ShowShop";
import { connect } from "react-redux";
const route = [
  {
    path: "/Shop/Category/:id",
    exact: false,
    main: ({ match }) => <ListProduct match={match} />
  }
];
class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      product: []
    };
  }
  componentDidMount() {
    this.props.showCategory();
    this.props.showSlide();
  }
  render() {
    const listCategory = this.props.category;
    return (
      <>
        <section>
          <Slide slide={this.props.slide} />
          <Space />

          {/* CategoryShop */}
          <ListCategory
            className="container"
            match={this.props.match}
            ListCategory={listCategory}
          />
          <section className="listProduct contanier align-content-center">
            <div className="row align-content-center">
              {this.showrouter(route)}
            </div>
          </section>
        </section>
      </>
    );
  }
  showrouter(route) {
    let resfult = null;
    if (route.length > 0) {
      resfult = route.map((temp, index) => {
        return (
          <Route
            key={index}
            path={temp.path}
            exact={temp.exact}
            component={temp.main}
          />
        );
      });
    }
    return <Switch>{resfult}</Switch>;
  }
}
const mapStateToProps = state => {
  return {
    category: state.myCategoryShop,
    slide: state.mySlideShop
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    showCategory: () => {
      dispatch(getApiCategoryShop());
    },
    showSlide: () => {
      dispatch(getApiSlideShop());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
