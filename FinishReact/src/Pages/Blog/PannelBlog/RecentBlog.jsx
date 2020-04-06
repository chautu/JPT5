import React, { Component } from "react";
import { connect } from "react-redux";
import { getApiListBlog } from "../../../Actions/ShowBlog";
class RecentBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  show_list(list_blog) {
    return list_blog.map((blog, index) => (
      <div className="block-21 mb-4 d-flex" key={index}>
        <a className="blog-img mr-4" href={`/Blog/${blog.idBlogDetails}`}>
          <img src={blog.image} alt="recentblog" />
        </a>
        <div className="text">
          <h3 className="heading-1">
            <a href={`/Blog/${blog.idBlogDetails}`}>{blog.tite}</a>
          </h3>
          <div className="meta">
            <div>
              <a href={`/Blog/${blog.idBlogDetails}`}>
                <span className="icon-calendar"></span> {blog.date}
              </a>
            </div>
            <div>
              <a href={`/Blog/${blog.idBlogDetails}`}>
                <span className="icon-person"></span> {blog.userPost}
              </a>
            </div>
            <div>
              <a href={`/Blog/${blog.idBlogDetails}`}>
                <span className="icon-chat"></span> {blog.quantity_comment}
              </a>
            </div>
          </div>
        </div>
      </div>
    ));
  }
  render() {
    const list_blog = this.props.showList;
    return (
      <>
        <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
          <h3 className="heading">Recent Blog</h3>
          {this.show_list(list_blog)}
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    showList: state.myListBlog
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    showlist: () => {
      dispatch(getApiListBlog());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RecentBlog);
