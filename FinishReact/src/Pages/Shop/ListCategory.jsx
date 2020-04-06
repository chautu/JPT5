import React, { Component } from "react";
import { Route } from "react-router-dom";

const AddRoute = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        let active = match ? "active" : "";
        return (
          <li className={`User-li nav-item ${active}`}>
            <a href={to} className={`${active}`}>
              {label}
            </a>
          </li>
        );
      }}
    />
  );
};
class ListCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="col-md-10 mb-5 text-center algin-iten">
        <ul className="product-category">{this.showListcategory()}</ul>
      </div>
    );
  }
  showListcategory() {
    let result = null;
    if (this.props) {
      result = this.props.ListCategory.map((link, index) => {
        let exact = link.id === 0 ? true : false;
        return (
          <AddRoute
            key={index}
            label={link.name}
            to={`${this.props.match.url}/${link.id}`}
            activeOnlyWhenExact={exact}
          />
        );
      });
    }
    return result;
  }
}
export default ListCategory;
