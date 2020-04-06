import React, { Component } from "react";
import "./login.css";
import SignUp from "./SignUp";
import { getApiLogin } from "../../Actions/Login";
import { connect } from "react-redux";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showSignUp: false
    };
  }

  onChange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.value;

    this.setState({
      [name]: value
    });
  };
  onSubmit = () => {
    this.props.Login(this.state);
  };

  render() {
    var { history } = this.props;
    
    if (
      this.props.checkLogin.isLogin === true ||
      this.props.checkLogin.isLogin === "true"
    )
      history.goBack();
    const signUp = this.state.showSignUp === true ? <SignUp /> : <></>;

    return (
      <>
        <div className="login-container container">
          <div className="d-flex justify-content-center h-100">
            <div className="row">
              <div className="col login-card card">
                <div className="login-card-header card-header">
                  <h3>Sign In</h3>
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
                        name="email"
                        onChange={this.onChange}
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
                        name="password"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="login-remember row align-items-center remember">
                      <input type="checkbox" />
                      Remember Me
                    </div>
                    <div className="form-group">
                      <input
                        type="button"
                        value="Login"
                        className="btn float-right login_btn"
                        onClick={this.onSubmit}
                      />
                    </div>
                  </form>
                </div>
                <div className="login-card-footer card-footer">
                  <div className="login-links d-flex justify-content-center links">
                    Don't have an account?
                    <button
                      className="sign-up-btn btn btn-outline-warning "
                      onClick={() =>
                        this.setState({
                          showSignUp: !this.state.showSignUp
                        })
                      }
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="login-links d-flex justify-content-center">
                    <a href="/">Forgot your password?</a>
                  </div>
                </div>
              </div>

              <div className="col-1  "></div>
              {signUp}
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    checkLogin: state.myLogin
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    Login: login => {
      dispatch(getApiLogin(login));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
