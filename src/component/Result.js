import React, { Component } from "react";

export class Result extends Component {
  render() {
    console.log("result data", this.props.data);
    return (
      <div>
        {this.props.data.map((state1) => (
          <h2>{state1.name}</h2>
        ))}
      </div>
    );
  }
}

export default Result;
