import React, { Component } from 'react';
import axios from 'axios';
import qs from 'query-string';
import { Route, Switch, Redirect } from 'react-router-dom';

import style from './Search.css';

const API_URL = 'https://jaroslawklata.pl/vehicles';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            query: [],
            queryString: '',
            fetchesCars: [],
            results: []
        };

        this.filterCars = this.filterCars.bind(this);
        this.changeSearchResults = this.changeSearchResults.bind(this);
        this.submit = this.submit.bind(this);
    }

    queryObject(query, set) {
        const res = new Array();
        for (i = 0; i < set.length; i++) {
            for (key in set[i]) {
                if (set[i][key].indexOf(query) > -1) {
                    res.push(set[i]);
                }
            }
        }
        if (result.length) {
            return JSON.stringify(results);
        } else {
            return null;
        }
    }

    getCars = () => {
        console.log("from getCars()");
        const query = this.state.query;

        axios.get(`${API_URL}`)
            .then(({...data}) => {
                const cars = data.data.slice();
                console.log('Data': cars);

                const myCars = cars.map(car => {
                    // console.log('From map' + Object.values(car.vehicleCapDetails));
                    const carDetails = Object.values(car.vehicleCapDetails);

                    return {
                        ...car
                    }
                });
                
                console.log('myCar', myCars);
                const updateCars = myCars.filter(car => {
                    const carDetails = Object.values(car.vehicleCapDetails);
                    return carDetails.includes(this.state.query);
                });

                this.setState({
                    results: updateCars
                })

            }).catch((error) => console.log(error));
    }

    componentDidMount() {}

    changeSearchResults(e) {
        const query = e.target.value.split(" ");
        console.log('stateOnChange' +this.state.results);
        console.log(query);
    }

    filterCars(e) {
        const query = e.target.value;
        const arr = query.split(" ");
        const replaced = query.replace(/ /g, '+');
        const searchquery = qs.stringify(arr, {arrayFormat: 'index'});
        console.log(replaced);

        this.setState({
            queryString: searchquery,
            query: query
        });
    }

    getFilteredCarsForText(query) {
        return this.state.fetchesCars.filter(car => car.toLowerCase().includes(query.toLowerCase()));
    }

    submit(e) {
        e.preventDefault();
        console.log('Query submit', this.state.query);
        console.log(this.state.fetchesCars);
        this.getCars();
    }

    render() {
        const filterText = this.state.query;
        const searchResults = null;
        console.log('From render: ', this.state.results);

        return (
            <div className={style.search}>
                <header>
                    <div className={style.searchContainer}>
                    <nav>
                        <form onSubmit={this.submit}>
                            <input placeholder="Search for..."
                                   onChange={this.filterCars} />
                            <button type="submit">Find car</button>
                        </form>
                    </nav>
                    </div>
                </header>

                {this.state.results.length > 0 && 
                    <Redirect push to={{
                        pathname: '/results',
                        search: `?query=${this.state.query}`,
                        state: { results: this.state.results }
                    }} />
                }
        
            </div>
        )
    }
}

export default Search;