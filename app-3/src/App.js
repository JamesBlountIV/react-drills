import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      arrayFinal: ['K : There once was a pale man with dark hair,', 'who was very lonely',
    'W : Why was it lonely?', 'K : All things must meet this man,', 'and so they shunned him.',
  'W : Did he chase them all?', 'K :He took an axe, and split himself in two,', 'right down the middle',
'W : So he would always have a friend?', 'K : So he would always have a friend.']
    }
  }
  handleChange(val) {
    this.setState({userInput: val})
  }


  render() {
    let dynArr = this.state.arrayFinal.filter((ele, i) => {
      return ele.includes(this.state.userInput);
    }).map((ele, i) => {
      return <h2 key={i}>{ele}</h2>;
    });
    return (
      <div className="App">
        <input className="filter" onChange= {e => this.handleChange(e.target.value)} type="text" />
        {dynArr}
      </div>
    );
  }
}

export default App;
