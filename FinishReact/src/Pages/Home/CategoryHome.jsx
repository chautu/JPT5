import React, { Component } from "react";
import { connect } from "react-redux";
import { getApiCategoryHome } from "../../Actions/ShowHome";
import { Link } from "react-router-dom";
class CategoryHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.showCategory();
  }
  render() {
    const category = show => {
      if (show)
        return (
          <Link to={`/Shop/Category/${show.id}`}>
            <div className="categoryHome-image ">
              <img src={show.image} alt="Category"></img>
            </div>
            <div className="categoryHome-content ">
              <button className="btn-categoryhome btn btn-primary">
                {show.name}
              </button>
            </div>
          </Link>
        );
      else return <></>;
    };
    return (
      <section>
        <div className="categoryHome container">
          <div className="categoryHome row align-items-center">
            <div className="categoryHome-left col-md-auto">
              <div>{category(this.props.category[1])}</div>
              <div>{category(this.props.category[2])}</div>
            </div>
            <div className="categoryHome-center col-md-auto">
              <div className="categoryHome-image ">
                <img src="images/category.jpg" alt="Category"></img>
              </div>
              <div className="categoryHome-content align-items-md-center  text-center">
                <h2>Vegetables</h2>
                <p>Protect the health of every home</p>
                <a
                  name=""
                  id=""
                  className="btn-categoryhome-center btn btn-primary"
                  href="/Shop"
                  role="button"
                >
                  Shop now
                </a>
              </div>
            </div>
            <div className="categoryHome-right col-md-auto">
              <div>{category(this.props.category[3])}</div>
              <div>{category(this.props.category[4])}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return { category: state.myCategoryHome };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    showCategory: () => {
      dispatch(getApiCategoryHome());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryHome);
