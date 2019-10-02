import React, {Component} from 'react';

export default class Image extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <img src={this.props.url}/>
                <div>Error > 9000</div>
            </div>
        );
    }
}