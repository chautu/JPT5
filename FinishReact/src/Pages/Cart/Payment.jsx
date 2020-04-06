import React, { Component } from "react";
import CodeSale from "./Payment/CodeSale";
import Total from "./Payment/Total";
class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <CodeSale />
        <Total />
      </>
    );
  }
}

export default Payment;
