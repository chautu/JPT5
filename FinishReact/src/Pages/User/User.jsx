import React, { Component } from "react";
import PannelUser from "./PannelUser";
import FormUser from "./FormUser";
import { Route, Switch } from "react-router-dom";
import "./User.css";
import CartUser from "./CartUser";
import ChangePassword from "./ChangePassword";
const routes = [
  {
    path: "/User/:id",
    exact: true,
    main: ({ match }) => <FormUser match={match} />
  },
  {
    path: "/User/:id/quan-ly-don-hang",
    exact: false,
    main: ({ match }) => <CartUser match={match} />
  },
  {
    path: "/User/:id/change-password",
    exact: false,
    main: ({ match }) => <ChangePassword match={match} />
  }
];

class User extends Component {
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
              <PannelUser match={this.props.match} />
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

export default User;
