import React, { Component } from 'react'
import Home from "./Home"  // Import the Home component
import Car from './Car';
import Pet from './Pet';
import Cohort from './Cohort';
import img from './budapest.jpg';

// home/car, etc are describing me and my state
// Me should be the only component with state, but React uses props to pass state to child components
// Child components (home, car) don't have state
class Me extends Component {

    constructor(props) {
        super(props)

        this.contactCardKey = 1

        // Put all information about yourself as state properties
        this.state = {
            firstName: "",
            lastName: "",
            cohort: "",
            address: {},
            car: "",
            pet: {}
        }
    }

    loadPeople() {
        fetch("http://localhost:8088/people/1")
            // Must be explicit on how to parse the response
            .then(r => r.json())

            // JSON parsed data comes to this then()
            .then(p => this.setState(p))
    }

    componentDidMount() {
        this.loadPeople()  // Trigger the loading of contacts
    }


    render() {
        return (
            <div id="main" className="people">
                <h3>{this.state.firstName} {this.state.lastName}</h3>
                <img src={img} className="Img-logo" alt="img" style={{ height: 200 }} />
                <Cohort cohort={this.state.cohort} />
                <Home address={this.state.address} />
                <Car car={this.state.car} />
                <Pet pet={this.state.pet} />
            </div>
        );
    }
}

export default Me