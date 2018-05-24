import React, { Component } from 'react'

class Car extends Component {
    render() {
        return (
            <div>
                <h5>Car: {this.props.car}</h5>
            </div>
        );
    }
}

export default Car