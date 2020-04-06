import React, { Component } from "react";
import CategoryMenu from "./CategoryMenu";

import RecentBlog from "./RecentBlog";
import Tag from "./Tag";
class PannelBlog extends Component {
  state = {};
  render() {
    return (
      <>
        {" "}
        {/* search */}
        <div className="sidebar-box">
          <form action="#" className="search-form">
            <div className="form-group">
              <span className="icon ion-ios-search"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
            </div>
          </form>
        </div>
        {/* category */}
        <CategoryMenu />
        <RecentBlog />
        <Tag />
        <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
          <h3 className="heading">Paragraph</h3>
          <p>Thank you so much ! </p>
        </div>
      </>
    );
  }
}

export default PannelBlog;
