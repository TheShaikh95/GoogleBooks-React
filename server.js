const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(require("./routes/api"));

if ("development" == app.get("env")) {
    require("dotenv").config();
} else if ("production" == app.get("env")) {
    app.use(express.static(path.join(__dirname + '/client/build')));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
}


mongoose.connect(`mongodb+srv://usmantheadmin:${process.env.DB_PASSWORD}@cluster0.ztv1h.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));