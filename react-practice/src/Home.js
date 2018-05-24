import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div>
                <h5>Address: {this.props.home}</h5>
            </div>
        );
    }
}

export default Home