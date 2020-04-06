import React, { Component } from "react";
import { connect } from "react-redux";
import { getApiCategoryBlog } from "../../../Actions/ShowBlog";
import { Link } from "react-router-dom";

class CategoryMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.showCategory();
  }
  render() {
    const category = this.props.category;
    const show_list = category.map((category, index) => (
      <li key={index}>
        <Link to={`/shop/Category/${category.id}`}>
          {category.name} <span>{category.quatity}</span>
        </Link>
      </li>
    ));
    return (
      <>
        <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
          <h3 className="heading">Categories</h3>
          <ul className="categories">{show_list}</ul>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    category: state.myCategoryBlog
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    showCategory: () => {
      dispatch(getApiCategoryBlog());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryMenu);
