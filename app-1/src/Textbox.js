import React, {Component} from 'react';

export default class Textbox extends Component {
    constructor() {
        super();
        this.state = {
            userInput: ''
        }
    }
    handleChange(val) {
        this.setState({ userInput: val});
    }


    render() {
        return (
        <div className="app1Textbox"> 
            <h4>Begin your story here</h4>
            <input className="inputLine" onChange= { (e) => this.handleChange(e.target.value)} type="text" />
            <p>{this.state.userInput}</p>
        </div>  
        )
    };
}