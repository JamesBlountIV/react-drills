import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    constructor() {
      super();
      this.state = {
        myArray: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
      }
    }
    
    render() {
      let strArr = this.state.myArray.map((element, i)=> {
        return <h2 key={i}> {element} </h2>
      })
    return (
      <div className="App">
      {strArr}
      </div>
    );
  }
}

export default App;
