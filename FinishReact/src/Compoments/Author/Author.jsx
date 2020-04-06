import React, { Component } from "react";
import "./Author.css";
class Author extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const author = this.props.author;

    return (
      <>
        <div className="about-author d-flex p-4 bg-light">
          <div className="bio align-self-md-center mr-4">
            <img src={author.image} alt="author" className="img-fluid mb-4" />
          </div>
          <div className="desc align-self-md-center">
            <h3>{author.userName}</h3>
            <p>{author.descriptions}</p>
          </div>
        </div>
      </>
    );
  }
}

export default Author;
