import React, { Component } from "react";
import { DelUser } from "../../Actions/showAdmin";
import { connect } from "react-redux";
class ItemTableUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onDelete(id) {
    console.log(id);
    this.props.DeleteUser(id);
  }
  render() {
    const User = this.props.user;
    return (
      <>
        <tr>
          <td className="id-user">
            <p>{User.id}</p>
          </td>

          <td className="email-user">
            <p>{User.email}</p>
          </td>

          <td className="password-user">
            <p>{User.password}</p>
          </td>

          <td className="paypal">
            <a href={`/user/${User.id}`} className="btn btn-dark">
              Details
            </a>
          </td>

          <td>
            <button
              onClick={() => this.onDelete(User.id)}
              type="button"
              className="btn btn-primary"
            >
              Delete
            </button>
          </td>
        </tr>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    DeleteUser: id => {
      dispatch(DelUser(id));
    }
  };
};
export default connect(null, mapDispatchToProps)(ItemTableUser);
