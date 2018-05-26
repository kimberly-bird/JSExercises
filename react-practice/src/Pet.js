import React, { Component } from 'react'

class Pet extends Component {
    render() {
        return (
            <div id="dog">
                <h4>My fave pet</h4>
                <h5>Name: {this.props.pet.name}</h5>
                <h5>Species: {this.props.pet.species}</h5>
                <h5>Breed: {this.props.pet.breed}</h5>
            </div>
        );
    }
}

export default Pet