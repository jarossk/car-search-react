import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Car from '../../../components/Car';

class CarsResults extends Component {
    
    constructor(props) {
        super(props);
    }

    carSelected = (id) => {
        this.props.history.push({pathname: '/results/' + id});
    }

    render() {
        console.log(this.props.query);
        console.log('Search: ', this.props.location);
        const results = this.props.location.state.results;
        console.log('results', this.props.loaction.state.results);
        // if (!this.state.error) {
        let carsResults = results.map(car => {
            return (
                <Link to={{
                        path: '/results/' + car.id
                    }}
                    key={car.id}>
                    <Car makeName={car.vehicleCapDetails.capMakeName}
                         modelName={car.vehicleCapDetails.capModelName}
                         clicked={() => this.carSelected(car.id)} />
                </Link>
            );
        });
        // } here can filter ! carsresults
        return (
            <section className="Cars">{carsResults}</section>
        )
    }
}

export default CarsResults;