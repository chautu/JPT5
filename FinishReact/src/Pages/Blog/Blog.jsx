import React, { Component } from "react";
import "./Blog.css";
import Slide from "../../Compoments/Slide/Slide";
import Space from "../../Compoments/Space/Space";
import ListBlog from "./ListBlog";
import { connect } from "react-redux";
import PannelBlog from "./PannelBlog/PannelBlog";
import { getApiSlideBlog } from "../../Actions/ShowBlog";
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.showSlide();
  }
  render() {
    return (
      <>
        <Slide slide={this.props.slide} />
        <Space />
        <section className="container">
          <div className="row">
            <div className="col-lg-8 ftco-animate fadeInUp ftco-animated">
              <div className="row">
                <ListBlog />
              </div>
            </div>

            <div className="col-lg-4 sidebar ftco-animate fadeInUp ftco-animated">
              <PannelBlog />
            </div>
          </div>
        </section>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    slide: state.mySlideBlog
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    showSlide: () => {
      dispatch(getApiSlideBlog());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
