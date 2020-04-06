import React, { Component } from "react";
import { getApiFormUser } from "../../Actions/ShowUser";
import { connect } from "react-redux";
class FormUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.showForm(id);
  }
  render() {
    const user = this.props.myForm;
    const gender =
      user.gender === true || user.gender === "true" ? "Nam" : "Nu";
    return (
      <>
        <div className="container">
          <h1 className="title-User text-center justify-content-center">
            Thông tin cá nhân
          </h1>
          <div className="row d-flex p-2 justify-content-center bd-highlight ">
            <div className=" le-formUser "></div>
            <div className="Image-form-user justify-content-center">
              <img
                src={user.image}
                className="justify-content-center"
                alt="User"
              />
              <button
                type="button"
                name=""
                id=""
                className="User-form-btn btn btn-light d-flex justify-content-center btn-lg btn-block"
              >
                <i className="fas fa-camera p-2" />
                <p>Set Avatar</p>
              </button>
            </div>
            <div className="form-information-user px-2">
              <div className="d-flex">
                <p>Email :</p>
                <p> {user.email}</p>
              </div>
              <div className="d-flex">
                <p>Name :</p>
                <p>{user.name}</p>
              </div>
              <div className="d-flex">
                <p>Telephone :</p>
                <p> {user.telephone}</p>
              </div>
              <div className="d-flex">
                <p>Gender :</p>
                <p> {gender}</p>
              </div>
              <div className="d-flex">
                <p>Address :</p>
                <p> {user.address}</p>
              </div>
              <div className="d-flex">
                <p>MyAccountPayPal :</p>
                <p> {user.accountPaypal}</p>
              </div>
              <div className="d-flex">
                <p>Job :</p>
                <p> {user.job}</p>
              </div>
            </div>
          </div>
          <div className="edit-user d-flex justify-content-center">
            <button
              type="button"
              name=""
              id=""
              className="btn btn-primary px-5 "
            >
              Edit
            </button>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return { myForm: state.myFormUser };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    showForm: id => {
      dispatch(getApiFormUser(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormUser);
