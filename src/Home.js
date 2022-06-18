import React, { Component } from "react";

class Home extends Component {
  componentWillUnmount() {
    console.log("this component is removed from the dom ");
  }
  render() {
    return (
      <div>
        <h1>this is Home Component</h1>
      </div>
    );
  }
}
export default Home;
