import React, { Component } from 'react';

import './App.css';

import SearchApp from './containers/SearchApp/SearchApp'



class App extends Component {

    render() {
        return (
            <div className="SearchApp">
                <h1>React working!!!!</h1>
                <SearchApp />

            </div>
        );
    }
}

export default App;