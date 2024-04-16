const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

const dbURI = "mongodb+srv://Root:Root@cluster-names.tska7et.mongodb.net/";
mongoose.connect(dbURI, { useNewUrlParser: true })
    .then(() => {
        app.use("/api", routes); // Make sure your routes are set up correctly.

        app.listen(3005, () => {
            console.log("Server has started!");
        });
    })
    .catch(err => {
        console.error("Database connection error:", err);
    });
