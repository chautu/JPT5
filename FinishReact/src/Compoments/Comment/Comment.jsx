import React, { Component } from "react";
class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const comment = this.props.comment;
    return (
      <>
        <div className="vcard bio">
          <img src={comment.image} alt="comment" />
        </div>
        <div className="comment-body">
          <h3>{comment.userName}</h3>
          <div className="meta">{comment.date_comment}</div>
          <p>{comment.content}</p>
          <p>
            <a href="/" className="reply">
              Reply
            </a>
          </p>
        </div>
      </>
    );
  }
}

export default Comment;
