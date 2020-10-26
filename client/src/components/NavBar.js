import React from 'react';
import './styles.css'

class NavBar extends React.Component {
    render() {
        return(
            <nav id="NavBar" className="uk-box-shadow-large uk-navbar-container" data-uk-navbar data-uk-sticky>
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li className="uk-active"><a href="/">The Book Search</a></li>
                    </ul>
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li className="uk-active"><a href="/saved">Saved Books</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}


export default NavBar;