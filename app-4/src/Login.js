import React, {Component} from 'react';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
        this.validationAlert = this.validationAlert.bind(this);
    }
    handleChangeU(u) {
        this.setState({ username: u })
    }
    handleChangeP(p) {
        this.setState({ password: p })
    }
    validationAlert() {
        return alert(`U:${this.state.username} P: ${this.state.password}`);
    }
    render() {
        return (
            <div className="userLogin">
                <input className="username" onChange= { e => this.handleChangeU(e.target.value)} type="text" placeholder="username"/>
                <input className="password" onChange= { e => this.handleChangeP(e.target.value)} type="text" placeholder="password" />
                <button className="btn" onClick= {this.validationAlert}>Sign in</button>
            </div>
        );
    }
}