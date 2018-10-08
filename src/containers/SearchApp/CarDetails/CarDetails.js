import React, { Component } from 'react';
import axios from 'axios';

class CarDetails extends Component {
    state = {
        loadedCar: null
    }

    componentDidMount() {
        console.log(this.props.location.state);
        if (this.props.match.params.id) {
            if (!this.state.loadedCar || 
                (this.state.loadedCar && this.state.loadedCar.id !== this.props.id)) {
                axios.get('https://jaroslawklata.pl/vehicles/' + this.props.match.params.id)
                      .then(res => {
                          this.setState({
                              loadedCar: res.data
                          })
                      });
            }
        }
    }

    render() {
        const loadedCar = this.state.loadedCar;
        console.log(typeof loadedCar);
        let car = <p style={{textAlign: 'center'}}>Please wait</p>
        if (this.state.loadedCar) {
            car = (
                <div className="CarDetails">
                    <h1>{loadedCar.vehicleCapDetails.capMakeName}</h1>
                    <h1>{loadedCar.vehicleCapDetails.capMakeModel}</h1>
                    <img src={'https:'+loadedCar.displayImage.small} />
                </div>
            )
        }
        return car;
    }
}

export default CarDetails;