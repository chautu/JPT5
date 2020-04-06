import React, { Component } from "react";
import ItemTableUser from "./ItemTableUser";

import AddUser from "./AddUser";
import { GetApiUser } from "../../Actions/showAdmin";
import { connect } from "react-redux";
class TableUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdd: false
    };
  }
  componentDidMount() {
    this.props.showListUser();
  }
  render() {
    console.log(this.props.listUser);
    const showUser = this.props.listUser.map((temp, index) => (
      <ItemTableUser user={temp} key={index} />
    ));
    const showAdd =
      this.state.showAdd === true ? (
        <AddUser lengthUser={this.props.listUser.length} />
      ) : (
        <> </>
      );
    return (
      <>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => this.setState({ showAdd: !this.state.showAdd })}
              >
                AddUser
              </button>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">{showAdd}</div>
          </div>
        </div>
        <section className="Admin container">
          <section className="ftco-section ftco-Admin">
            <div className="container">
              <div className="row">
                <div className="col-md-12 ftco-animate fadeInUp ftco-animated">
                  <div className="Admin-list">
                    <table className="table">
                      <thead className="thead-primary">
                        <tr className="text-center">
                          <th>ID</th>
                          <th>Email</th>
                          <th>Password</th>
                          <th>Details</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>{showUser}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    listUser: state.myShowListUser
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    showListUser: () => {
      dispatch(GetApiUser());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableUser);
