import React, { Component } from "react";
class formcomment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="comment-form-wrap pt-5">
        <h3 className="mb-5">Leave a comment</h3>
        <form action="#" className="p-5 bg-light">
          <div className="form-group">
            <label name="name">Name *</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label name="email">Email *</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label name="website">Website</label>
            <input type="url" className="form-control" id="website" />
          </div>

          <div className="form-group">
            <label name="message">Message</label>
            <textarea
              name=""
              id="message"
              cols="30"
              rows="10"
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Post Comment"
              className="btn py-3 px-4 btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default formcomment;
