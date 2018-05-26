import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div>
                <h4>Address</h4>
                <h5>{this.props.address.street}</h5>
                <h5>{this.props.address.city}</h5>
                <h5>{this.props.address.state}</h5>
            </div>
        );
    }
}

export default Home