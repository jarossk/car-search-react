import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


import LogoImage from '../../assets/logo.jpg';
//import 'font-awesome/css/font-awesome.css';
import style from './SearchApp.css';
import Search from './Search/Search';
import CarsResults from './CarsResults/CarsResults';
import CarDetails from './CarDetails/CarDetails';

class SearchApp extends Component {
    render() {
        return (
            <div className={style.SearchApp}>
                <Switch>
                    <Route exact path="/" component={Search} />
                    <Route exact path="/results/:id" component={CarDetails} />
                    <Route path='/results' render={props => <CarsResults {...props} />} />
                </Switch>
            </div>
        );
    }
}

export default SearchApp;