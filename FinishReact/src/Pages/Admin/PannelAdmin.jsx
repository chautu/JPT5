import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";

const Adminlink = [
    {
      name: "Thông tin cá nhân",
      path: "",
      exact: true
    },
    {
      name: "Quản lý User",
      path: "/qluser",
      exact: false
    },
    {
      name: "Quản lí mặt hàng",
      path: "/qlmathang",
      exact: false
    },
    {
      name: "Thay đổi mật khẩu",
      path: "/change-password",
      exact: false
    }
  ];

const Adminlinks = ({ label, to, activeOnlyWhenExact }) => {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => {
          let active = match ? "active" : "";
          return (
            <li className={`Admin-li nav-item ${active}`}>
              <NavLink to={to} className={`nav-link ${active}`}>
                {label}
              </NavLink>
            </li>
          );
        }}
      />
    );
  };
class PannelAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Admin-pannel container-fluid  ">
            <div className="Admin-img align-items-sm-center justify-content-center">
              <div className="justify-content-center">
                <img
                  src="http://file.vforum.vn/hinh/2018/12/girl-xinh-hinh-anh-girl-xinh-dep-nhat-quyen-ru-51.jpg"
                  className="justify-content-center"
                  alt="Admin"
                />
              </div>
            </div>
            <div className="Admin-contact text-center">
              <h3>AdminName</h3>
              <p>DesignWeb</p>
            </div>
            <div className=" container-fluid">
              <ul className="container-fluid">{this.showMenu(Adminlink)}</ul>
            </div>
          </div>
         );
    }
    showMenu(Adminlink) {
        let result = null;
        if (Adminlink.length > 0) {
          result = Adminlink.map((menu, index) => {
            return (
              <Adminlinks
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
 
export default PannelAdmin;