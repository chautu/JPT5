import React, { Component } from "react";
import Tag from "../PannelBlog/Tag";
import Author from "../../../Compoments/Author/Author";
import Comment from "../../../Compoments/Comment/Comment";
import Formcomment from "./Formcomment";

import {
  getApiBlogDetails,
  getApiCommentBlog,
  getApiAuthor
} from "../../../Actions/ShowBlogDetails";
import { connect } from "react-redux";
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: {},
      comment: {}
    };
  }
  componentDidMount() {
    var id = this.props.match.params.id;
    this.props.showContent(id);
    this.props.showComment(id);
    this.props.showAuthor(id);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      author: nextProps.author[0],
      comment: nextProps.comment
    };
  }
  render() {
    //Show Author
    const showAuthor =
      this.state.author != null ? <Author author={this.state.author} /> : <></>;
    const post = this.props.content;

    // Show comment
    var show_comment = <></>;
    if (this.state.comment != null)
      show_comment = this.state.comment.map((comment, index) => (
        <li className="comment" key={index}>
          <Comment comment={comment} />
        </li>
      ));
    return (
      <>
        <div className="content-blog container-fluid">
          <h2 className="mb-3">{post.title}</h2>
          <img src={post.image} alt="blogdetails" className="img-fluid" />
          {post.content}

          <Tag />
          {showAuthor}
          <div className="pt-5 mt-5">
            <h3 className="mb-5">6 Comments</h3>
            <ul className="comment-list">{show_comment}</ul>
            <Formcomment />
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    content: state.myContentBlogDetails,
    comment: state.myCommentBlogDetails,
    author: state.myAuthorBlogDetails
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    showContent: id => {
      dispatch(getApiBlogDetails(id));
    },
    showComment: id => {
      dispatch(getApiCommentBlog(id));
    },
    showAuthor: id => {
      dispatch(getApiAuthor(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Content);
