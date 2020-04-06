import React, { Component } from "react";
import { Link } from "react-router-dom";
class ItemproductUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <tr className="text-center">
        <td className="image-prod">
          <img
            className="Bill img"
            src="https://znews-photo.zadn.vn/w480/Uploaded/ywfau/2014_10_26/chuoicothatsutotnhubannghi0.jpg"
            alt="Bill"
          />
        </td>

        <td className="product-name">
          <h3>Bell Pepper</h3>
          <p>Far far away, behind the word mountains, far from the countries</p>
        </td>

        <td className="quantity">
          <div className="input-group mb-3">
            <input
              type="text"
              name="quantity"
              className="quantity form-control input-number"
              defaultValue="1"
              min="1"
              max="100"
            />
          </div>
        </td>

        <td className="total">$4.90</td>
        <td className="price">Wait</td>
        <td className="product-remove">
          <Link to="/#">
            <span className="ion-ios-close"></span>
          </Link>
        </td>
      </tr>
    );
  }
}

export default ItemproductUser;
