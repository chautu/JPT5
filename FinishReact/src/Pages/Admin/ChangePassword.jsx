import React, { Component } from "react";
class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="justify-content-center container ">
        <form className="change-pass justify-content container">
          <div>
            <h1>Thay đổi mật khẩu</h1>
          </div>

          <div>
            <label className="label-change-pass">Mật khẩu cũ :</label>
            <input type="password" className="input-change-pass" />
          </div>
          <div>
            <label className="label-change-pass">Mật khẩu mới :</label>
            <input type="password" className="input-change-pass" />
          </div>
          <div>
            <label className="label-change-pass">Nhập lại mật khẩu mới :</label>
            <input type="password" className="input-change-pass" />
          </div>

          <button type="button" name="" id="" className="btn btn-primary ">
            Save
          </button>
        </form>
      </section>
    );
  }
}

export default ChangePassword;
