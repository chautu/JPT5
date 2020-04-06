import React, { Component } from "react";
import ListCommentSlide from "../../Compoments/Comment/ListCommentSlide";
import { connect } from "react-redux";
import { getApiCommentSlideHome } from "../../Actions/ShowHome";
class CommentHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.showCommentSlide();
  }
  render() {
    const listCommentSlide =
      this.props.commentSlide !== null ? this.props.commentSlide : "";

    return (
      <section className="container-fluid CommentHome">
        <div className="Comment-title container align-items-md-center">
          <div className=" heading-section  ftco-animate text-center fadeInUp ftco-animated">
            <span className="subheading">Testimony</span>
            <h2 className="mb-4">Our satisfied customer says</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in
            </p>
          </div>
          <ListCommentSlide listComment={listCommentSlide} />
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return { commentSlide: state.myCommentSildeHome };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    showCommentSlide: () => dispatch(getApiCommentSlideHome())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CommentHome);
