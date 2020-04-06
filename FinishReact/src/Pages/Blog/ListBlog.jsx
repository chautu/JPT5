import React, { Component } from "react";
import CardBlog from "./CardBlog";
import { getApiListBlog } from "../../Actions/ShowBlog";
import { connect } from "react-redux";
class ListBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.showlist();
  }
  render() {
    let show = <></>;
    if (this.props.showList != null) {
      const listblog = this.props.showList;
      show = listblog.map((cardblog, index) => (
        <CardBlog cardblog={cardblog} key={index} />
      ));
    }
    return <>{show}</>;
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
export default connect(mapStateToProps, mapDispatchToProps)(ListBlog);
