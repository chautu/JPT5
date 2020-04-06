import React, { Component } from "react";
import ListCommentSlide from "../../Compoments/Comment/ListCommentSlide";
import Space from "../../Compoments/Space/Space";
import comment from "../../Data/Comment/CommentHome";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center">
                <a
                  href="https://www.youtube.com/watch?v=SpI3QF_Iauc&list=PLFHIz1YHZ_C6iDWeDO4jlwyU0sJ_UChJ9&index=3"
                  className="icon popup-vimeo d-flex justify-content-center align-items-center"
                >
                  <span className="icon-play"></span>
                </a>
              </div>
              <div className="col-md-7 py-5 wrap-about pb-md-5 ftco-animate fadeInUp ftco-animated">
                <div className="heading-section-bold mb-4 mt-md-5">
                  <div className="ml-md-0">
                    <h2 className="mb-4">
                      Welcome to Vegefoods an eCommerce website
                    </h2>
                  </div>
                </div>
                <div className="pb-md-5">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                  <p>
                    But nothing the copy said could convince her and so it
                    didn’t take long until a few insidious Copy Writers ambushed
                    her, made her drunk with Longe and Parole and dragged her
                    into their agency, where they abused her for their.
                  </p>
                  <p>
                    <a href="/Shop" className="btn btn-primary">
                      Shop now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Space />
        </section>
        <ListCommentSlide listComment={comment} />
      </>
    );
  }
}

export default About;
