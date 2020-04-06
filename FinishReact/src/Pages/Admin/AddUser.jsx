import React, { Component } from "react";
import {
  PostApiInformationUserAccount,
  PostApiUserAccount
} from "../../Actions/showAdmin";
import { connect } from "react-redux";
class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      email: ""
    };
  }
  onchange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  };

  onclick = () => {
  for(let i=0;i<2;i++){
    let obj = {
      id: this.props.lengthUser + 1,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    this.props.addUser(obj);
    this.props.addInformUser(obj);
  }
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    onChange={this.onchange}
                    name="name"
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    onChange={this.onchange}
                    name="email"
                    type="email"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    onChange={this.onchange}
                    name="password"
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Password"
                  />
                </div>
                <button
                  onClick={this.onclick}
                  type="button"
                  className="btn btn-danger"
                >
                  AddUser
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    addUser: obj => {
      dispatch(PostApiUserAccount(obj));
    },
    addInformUser: obj => {
      dispatch(PostApiInformationUserAccount(obj));
    }
  };
};
export default connect(null, mapDispatchToProps)(AddUser);
