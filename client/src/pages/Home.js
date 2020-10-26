import React from 'react';
import API from '../utilities/api';
import SearchHeader from '../components/SearchHeader';
import Content from '../components/Content';

class Home extends React.Component {

    state = {
        searchedBooks: null,
        action: {
            styleClass: "save-button",
            name: "Save"
        }
    };

    searchFormSubmit = (event) => {
        event.preventDefault();
        const searchQuery = event.target['search'].value;
        API.searchOnGoogle(searchQuery).then(response => {
            const result = response.data.items;
            if (result) {
                const books = result.map(element => {
                    const item = element.volumeInfo;
                    return {
                        id: element.id,
                        title: item.title,
                        link: item.previewLink,
                        image: item.imageLinks.thumbnail,
                        description: item.description
                    };
                });
                this.setState({ searchedBooks: books });
            } else this.setState({ searchedBooks: null });
        }).catch(err => {
            console.log(err);
        });
    }

    saveBook = (event) => {
        const saveID = event.target.value;
        const book = this.state.searchedBooks.filter(element => {
            if (element.id === saveID) return element;
            return null;
        })[0];
        if (book) {
            API.saveTheBook(book).then(response => {
                alert(response.data.message);
            }).catch(err => {
                console.log(err);
            })
        }
    }

    render() {
        return(
            <>
                <SearchHeader searchFormSubmit={this.searchFormSubmit}/>
                <Content books={this.state.searchedBooks} action={this.state.action} method={this.saveBook}/>
            </>
        );
    }
}


export default Home;