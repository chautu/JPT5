import React, { Component } from "react";
class CardBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const cardblog = this.props.cardblog;
    return (
      <div className="col-md-12 d-flex ftco-animate fadeInUp ftco-animated">
        <div className="card-blog blog-entry align-self-stretch d-md-flex">
          <a href={`/Blog/${cardblog.idBlogDetails}`} className="block-20">
            <img src={cardblog.image} alt="Blog" width="270px" height="250px" />
          </a>
          <div className="text d-block pl-md-4">
            <div className="meta mb-3">
              <div>
                <a href={`/Blog/${cardblog.idBlogDetails}`}>{cardblog.date}</a>
              </div>
              <div>
                <a href="/">{cardblog.usercreate}</a>
              </div>
              <div>
                <a href="/" className="meta-chat">
                  <span className="icon-chat"></span> 3
                </a>
              </div>
            </div>
            <h3 className="heading">
              <a href={`/Blog/${cardblog.idBlogDetails}`}>{cardblog.tite}</a>
            </h3>
            <p>{cardblog.content}</p>
            <p>
              <a
                href={`/Blog/${cardblog.idBlogDetails}`}
                className="btn btn-primary py-2 px-3"
              >
                Read more
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardBlog;
