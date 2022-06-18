import React, { Component } from "react";
import Home from "./Home";

export default class componentName extends Component {
  state = { count: 0, show: false };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    /*  this.state.count>0 &&  this.setState({count:this.state.count-1}) */
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  handleShow = () => {
    this.state.show
      ? this.setState({ show: false })
      : this.setState({ show: true });
    console.log(this.state.show);
  };

componentDidMount(){
   console.log('mounting')
}
componentDidUpdate(){
  console.log('updating')
}


  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={this.handleShow}>Show</button>
        {this.state.show? <Home/>:null}
      </div>
    );
  }
}
