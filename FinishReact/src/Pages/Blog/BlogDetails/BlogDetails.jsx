import React, { Component } from "react";
import Content from "./Content";
import PannelBlog from "../PannelBlog/PannelBlog";
class BlogDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 ftco-animate fadeInUp ftco-animated">
            <Content match={this.props.match} />
          </div>
          <div className="col-lg-4 sidebar ftco-animate fadeInUp ftco-animated">
            <PannelBlog />
          </div>
        </div>
      </div>
    );
  }
}

export default BlogDetails;
