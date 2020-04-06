import React, { Component } from "react";
import Slide from "../../Compoments/Slide/Slide";
import Space from "../../Compoments/Space/Space";
import "./Home.css";
import Services from "../../Compoments/Services/Services";
import CategoryHome from "./CategoryHome";
import ProductHome from "./ProductHome";
import CommentHome from "./CommentHome";
import Banner from "./Banner";

import "bootstrap/dist/js/bootstrap.bundle.min";
import Logo from "./Logo";
import SendMail from "../../Compoments/SendMail/SendMail";
import { connect } from "react-redux";
import { getApiSlideHome } from "../../Actions/ShowHome";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.showslide();
  }

  render() {
    const slide = this.props.mySlide !== {} ? this.props.mySlide : "";
    return (
      <>
        <Slide slide={slide} />
        <Space />
        <Services />
        <Space />
        <CategoryHome />
        <Space />
        <ProductHome />
        <Space />
        <Banner />
        <Space />
        <CommentHome />
        <Space />
        <Logo />
        <Space />
        <SendMail />
      </>
    );
  }
}
const mapStateToProps = state => {
  return { mySlide: state.mySlideHome };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    showslide: () => {
      dispatch(getApiSlideHome());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
