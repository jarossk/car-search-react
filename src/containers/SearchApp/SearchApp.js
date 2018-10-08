import React, { Component } from 'react';
import LogoImage from '../../assets/logo.jpg';
//import 'font-awesome/css/font-awesome.css';

import style from './SearchApp.css';

class SearchApp extends Component {
    render() {
        return (
            <div className={style.appSearch}>
            <header>
                <div id="logo" className="">
                <img src={LogoImage} />
                </div>
                <form className={style.searchFrom}>
                    <input type="text" placeholder="Search car ..." />
                    <button className={style.buttonSub} type="submit"><i className="fa fa-search"></i></button>
                </form>
                
            </header>
            
            <div className="row">
            <p className={style.XxX}>Some text</p>
                <main>
                    <section>
                      Wellcome
                    </section>
                    <section>
                     Some text
                    </section>
                    <section>
                      Map
                    </section>
                </main>
            </div>
            <footer className="footer">

            </footer>

            </div>
        );
    }
}

export default SearchApp;