import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Comment.css";
class CommentSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _comment: {}
    };
  }
  render() {
    const _comment = {
      id: this.props.comment.id,
      image: this.props.comment.image,
      idUser: this.props.comment.id_User,
      userName: this.props.comment.userName,
      content: this.props.comment.content,
      job: this.props.comment.job
    };
    return (
      <>
        <Link to={`/User/${_comment.idUser}`}>
          <div className="comment-card card align-items-md-center">
            <div className="m-4 comment-image align-items-md-center">
              <img src={_comment.image} alt="comment" />
              <span className="quote d-flex align-items-center justify-content-center">
                <i className="icon-quote-left" />
              </span>
            </div>
            <div className="comment-content align-items-md-center text-center">
              <p className="mb-5 pl-4 line">{_comment.content}</p>
              <p className="comment-name">{_comment.userName}</p>
              <span className="comment-position">{_comment.job}</span>
            </div>
          </div>
        </Link>
      </>
    );
  }
}

export default CommentSlide;
