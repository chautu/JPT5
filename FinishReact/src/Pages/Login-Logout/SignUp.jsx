import React, { Component } from "react";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col login-card card">
        <div className="login-card-header card-header">
          <h3>Sign Up</h3>
          <div className="login-social_icon d-flex justify-content-end social_icon">
            <span>
              <i className="fab fa-facebook-square"></i>
            </span>
            <span>
              <i className="fab fa-google-plus-square"></i>
            </span>
            <span>
              <i className="fab fa-twitter-square"></i>
            </span>
          </div>
        </div>
        <div className="login-card-body card-body">
          <form>
            <div className="input-group form-group">
              <div className="login-input-group-prepend input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <input
                type="email"
                className="form-control"
                placeholder="email"
              />
            </div>
            <div className="input-group form-group">
              <div className="login-input-group-prepend input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-key"></i>
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                placeholder="password"
              />
            </div>
            <div className="input-group form-group">
              <div className="login-input-group-prepend input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-key"></i>
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                placeholder="confirm password "
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                value="Sign up"
                className="btn float-right login_btn"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
