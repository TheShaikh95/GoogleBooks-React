import React from 'react';

class SearchHeader extends React.Component {
    
    render() {
        return(
            <div id="SearchHeader" className="uk-inline">

                <img src="assets/image.jpg" alt="Showing typewriter, book and props"/>
                <div className="uk-border-rounded uk-box-shadow-xlarge uk-box-shadow-hover-medium uk-position-small uk-position-center uk-overlay uk-overlay-default">
                    <form onSubmit={this.props.searchFormSubmit.bind(this)} className="uk-search uk-search-navbar">
                        <span data-uk-search-icon></span>
                        <input className="uk-search-input" type="search" name="search" placeholder="Search..."/>
                    </form>
                </div>

            </div>
        );
    }
}


export default SearchHeader;