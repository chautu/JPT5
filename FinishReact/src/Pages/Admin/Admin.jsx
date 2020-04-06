import React, { Component } from "react";
import TableUser from "./TableUser";
import ChangePassword from "./ChangePassword";
import TableProduct from "./TableProduct";
import PannelAdmin from "./PannelAdmin";
import "./Admin.css";
import { Switch, Route } from "react-router-dom";
import AddProduct from "./AddProduct";

const routes = [
  {
    path: "/Admin/:name/qluser",
    exact: true,
    main: ({ match }) => <TableUser match={match} />
  },
  {
    path: "/Admin/:name/qlmathang",
    exact: true,
    main: ({ match }) => <TableProduct match={match} />
  },
  {
    path: "/Admin/:name/change-password",
    exact: false,
    main: ({ match }) => <ChangePassword match={match} />
  },
  {
    path: "/Admin/:name/qlmathang/add-product",
    exact: false,
    main: ({ match }) => <AddProduct match={match} />
  }
];
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="User contaniner justify-content-center">
          <div className=" row ">
            <div className="col-sm-3">
              <PannelAdmin match={this.props.match} />
            </div>

            <div className="col-sm-9">{this.showrouter(routes)}</div>
          </div>
        </div>
      </>
    );
  }
  showrouter(routes) {
    let resfult = null;

    if (routes.length > 0) {
      resfult = routes.map((temp, index) => {
        return (
          <Route
            key={index}
            path={temp.path}
            exact={temp.exact}
            component={temp.main}
          />
        );
      });
    }

    return <Switch>{resfult}</Switch>;
  }
}

export default Admin;
