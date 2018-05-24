import React, { Component } from 'react'

class Pet extends Component {
    render() {
        return (
            <div>
                <h5>Dog: {this.props.pet}</h5>
            </div>
        );
    }
}

export default Pet