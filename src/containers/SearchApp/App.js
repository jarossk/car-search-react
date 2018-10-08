import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import SearchApp from './SearchApp';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                   <SearchApp />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;