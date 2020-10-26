import React from 'react';


class Content extends React.Component {
    
    componentDidUpdate() {
        this.showContent();
    }
    
    showBooks = () => {
        return this.props.books.map((element, index) => {
            return(
                <div key={index}>
                    <div className="uk-card uk-card-default">
                        <a className="uk-link-toggle" href={element.link} rel="noopener noreferrer" target="_blank">
                            <div className="uk-text-center uk-card-media-top">
                                <img src={element.image} alt={element.title}/>
                            </div>
                        </a>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">{element.title}</h3>
                            <p className="uk-text-truncate">{element.description}</p>
                        </div>
                        <div className="button-div">
                            <button value={element.id} onClick={this.props.method.bind(this)} className={"uk-button uk-button-secondary uk-width-1-1 " + this.props.action.styleClass}>{this.props.action.name}</button>
                        </div>
                    </div>
                </div>
            );
        });
    }

    showContent = () => {
        if (!this.props.books) {
            return(
                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title">Search</h3>
                    <p>Nothing to show.</p>
                </div>     
            );
        } else {
            return(
                <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
                    {this.showBooks()}
                </div>
            );
        }
    }

    render() {
        return(
            <div id="Content">
                {this.showContent()}
            </div>
        );
    }
}


export default Content;