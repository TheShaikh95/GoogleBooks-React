const api = require("express").Router();
const { response } = require("express");
const books = require("../models/books");

api.post("/api/saveBook",
    (req, res) => {
        books.findOne({ id: req.body.id }, function(err, book) {
            if (err) res.send(JSON.stringify({ message: "Some Error Occured." }));
            if (!book) {
                books.create(req.body).then(response => {
                    res.send(JSON.stringify({ message: "Book saved successfully." }));
                }).catch(err => {
                    res.send(JSON.stringify({ message: "Some Error Occured." }));
                });
            } else res.send(JSON.stringify({ message: "Book already saved." }));
        });
    }
);

api.get("/api/getSavedBooks",
    (req, res) => {
        books.find({}, function(err, books) {
            if (err) res.send(JSON.stringify({ books: [] }));
            else res.send(JSON.stringify({ books }));
        })
    }
)

api.delete("/api/deleteSavedBook",
    (req, res) => {
        books.deleteOne({ id: req.body.bookID }, function(err) {
            if (err) res.send(JSON.stringify({ deleted: false }));
            else res.send(JSON.stringify({ deleted: true }));
        });
    }
)


module.exports = api;