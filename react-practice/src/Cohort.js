import React, { Component } from 'react'

class Cohort extends Component {
    render() {
        return (
            <div>
                <h4>Cohort: {this.props.cohort}</h4>
            </div>
        );
    }
}

export default Cohort