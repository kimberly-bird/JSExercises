import React, { Component } from 'react'

class Car extends Component {
    render() {
        return (
            <div>
                <h4>Dream Car</h4>
                <h5>{this.props.car}</h5>
            </div>
        );
    }
}

export default Car