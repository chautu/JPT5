import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getApiFormUser } from "../../Actions/ShowUser";
const Userlink = [
  {
    name: "Thông tin cá nhân",
    path: "",
    exact: true
  },
  {
    name: "Quản lý đơn hàng",
    path: "/quan-ly-don-hang",
    exact: false
  },
  {
    name: "Thay đổi mật khẩu",
    path: "/change-password",
    exact: false
  }
];
const UserLinks = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        let active = match ? "active" : "";
        return (
          <li className={`User-li nav-item ${active}`}>
            <NavLink to={to} className={`nav-link ${active}`}>
              {label}
            </NavLink>
          </li>
        );
      }}
    />
  );
};
class PannelUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    const user = this.props.myForm;
    return (
      <div className="User-pannel container-fluid  ">
        <div className="User-img align-items-sm-center justify-content-center">
          <div className="justify-content-center">
            <img
              src={user.image}
              className="justify-content-center"
              alt="User"
            />
          </div>
        </div>
        <div className="User-contact text-center">
          <h6>{user.name}</h6>
          <p>{user.job}</p>
        </div>
        <div className=" container-fluid">
          <ul className="container-fluid">{this.showMenu(Userlink)}</ul>
        </div>
      </div>
    );
  }
  showMenu(Userlink) {
    let result = null;
    if (Userlink.length > 0) {
      result = Userlink.map((menu, index) => {
        return (
          <UserLinks
            key={index}
            label={menu.name}
            to={`${this.props.match.url}${menu.path}`}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
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

export default connect(mapStateToProps, mapDispatchToProps)(PannelUser);
