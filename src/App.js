import React, { Component } from 'react';
import Home from './Home';

export default class componentName extends Component {
  state={count:0,show:false};
  increment=()=>{
    this.setState({count:this.state.count+1})
  }
  decrement=()=>{
     /*  this.state.count>0 &&  this.setState({count:this.state.count-1}) */
      if(this.state.count>0 ){
        this.setState({count:this.state.count-1})
      }
  }
  render() {
    return (
      <div style={{textAlign:"center"}}>
          <button onClick={this.increment}>increment</button>
            <h1>{this.state.count}</h1> 
          <button onClick={this.decrement}>decrement</button>
      </div>
    )
  }
}
