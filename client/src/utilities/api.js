import axios from 'axios';

const searchOnGoogle = function(searchQuery) {
    return axios("https://www.googleapis.com/books/v1/volumes?q=" + searchQuery);
};

const saveTheBook = function(book) {
    return axios({
        method: 'post',
        url: '/api/saveBook',
        data: book
    });
}

const getSavedBooks = function() {
    return axios("/api/getSavedBooks");
}

const deleteSavedBook = function(bookID) {
    return axios({
        method: 'delete',
        url: '/api/deleteSavedBook',
        data: { bookID }
    });
}

export default {
    searchOnGoogle,
    saveTheBook,
    getSavedBooks,
    deleteSavedBook
}