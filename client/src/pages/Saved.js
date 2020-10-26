import React from 'react';
import Content from '../components/Content';
import API from "../utilities/api";

class Saved extends React.Component {
    
    state = {
        searchedBooks: null,
        action: {
            styleClass: "delete-button",
            name: "Delete"
        }
    };

    componentDidMount() {
        API.getSavedBooks().then(response => {
            const books = response.data.books;
            if (books.length) this.setState({ searchedBooks: books });
            else this.setState({ searchedBooks: null });
        }).catch(err => {
            console.log(err);
        });
    }

    deleteSavedBook = (event) => {
        const deleteID = event.target.value;
        API.deleteSavedBook(deleteID).then(response => {
            const deleted = response.data.deleted;
            if (deleted) {
                let books = this.state.searchedBooks;
                let index = null;
                for (let i = 0; i < books.length; i++) {
                    if (books[i].id === deleteID) {
                        index = i;
                        break;
                    }
                };
                if (index !== null) {
                    books.splice(index, 1);
                    this.setState({
                        searchedBooks: (books.length) ? books : null
                    });
                }
            }
        }).catch(err => {
            console.log(err);
        })
    }
    
    render() {
        return(
            <div>
                <Content books={this.state.searchedBooks} action={this.state.action} method={this.deleteSavedBook}/>
            </div>
        );
    }
}


export default Saved;