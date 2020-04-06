import React, { Component } from "react";
import "./Menu.css";
import { Route, Link } from "react-router-dom";
import { getApiInformUser } from "../../Actions/ShowMenu";
import { connect } from "react-redux";
const NavBar = [
  {
    name: "Home",
    path: "/",
    exact: true
  },
  {
    name: "Shop",
    path: "/Shop/Category/0",
    exact: false
  },
  {
    name: "About",
    path: "/About",
    exact: false
  },

  {
    name: "Blog",
    path: "/Blog",
    exact: false
  },
  {
    name: "Contact",
    path: "/Contact",
    exact: false
  }
];

const MenuLinks = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        let active = match ? "active" : "";
        return (
          <li className={`nav-item ${active}`}>
            <Link to={to} className="nav-link">
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      name: "",
      id: 0,
      image: ""
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.user.id !== undefined)
      return {
        isLogin: true,
        image: nextProps.user.image,
        name: nextProps.user.name,
        id: nextProps.user.id
      };
    return {};
  }
  componentDidMount() {
    const UserLogin =
      window.localStorage.getItem("Login").length > 3
        ? JSON.parse(window.localStorage.getItem("Login"))
        : "";
    
    if (UserLogin !== "") {
      this.props.showUser(UserLogin.data.id);
    }
  }
  logOut = () => {
    window.localStorage.setItem("Login", "");
    this.setState({
      isLogin: false
    });
  };
  render() {
    const Ilogin = this.state.isLogin;
    const User = this.state;
    const Login = Ilogin => {
      if (Ilogin === false)
        return (
          <>
            <li className="nav-item ">
              <Link className="nav-link  " to="/Login">
                Login
              </Link>
            </li>
          </>
        );
      return (
        <>
          <li className=" nav-item ">
            <Link className="nav-link user-login " to={`User/${User.id}`}>
              <img src={User.image} alt="User" />
            </Link>
          </li>
          <li className=" nav-item ">
            <Link className="nav-link user-login-name " to={`User/${User.id}`}>
              {User.name}
            </Link>
          </li>
          <li className=" nav-item ">
            <span
              className="nav-link user-login-name "
              to={`User/${User.id}`}
              onClick={this.logOut}
            >
              <i className="fas fa-sign-out-alt"></i>
            </span>
          </li>
        </>
      );
    };
    return (
      <section>
        <div className="py-1 bg-primary" style={{ fontSize: "20px" }}>
          <div className="container">
            <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
              <div className="col-lg-12 d-block">
                <div className="row d-flex">
                  <div className="col-md pr-4 d-flex topper align-items-center">
                    <div className="icon mr-2 d-flex justify-content-center align-items-center">
                      <span className="icon-phone2"></span>
                    </div>
                    <span className="text">+ 1235 2355 98</span>
                  </div>
                  <div className="col-md pr-4 d-flex topper align-items-center">
                    <div className="icon mr-2 d-flex justify-content-center align-items-center">
                      <span className="icon-paper-plane"></span>
                    </div>
                    <span className="text">youremail@email.com</span>
                  </div>
                  <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                    <span className="text">
                      3-5 Business days delivery &amp; Free Returns
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav
          className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
          id="ftco-navbar"
        >
          <div className="container">
            <a className="navbar-brand" href="/">
              Vegefoods
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="oi oi-menu"></span> Menu
            </button>

            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                {this.showmenu(NavBar)}
                {Login(Ilogin)}
                <li className="nav-item cta cta-colored">
                  <Link to="/Cart" className="nav-link">
                    <span className="icon-shopping_cart"></span>[0]
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    );
  }
  showmenu = NavBar => {
    let result = null;
    if (NavBar.length > 0) {
      result = NavBar.map((menu, index) => {
        return (
          <MenuLinks
            key={index}
            label={menu.name}
            to={menu.path}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
}
const mapStateToProps = state => {
  return {
    user: state.myMenuInformUser
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    showUser: id => {
      dispatch(getApiInformUser(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
