const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv/config')
const cors = require('cors');
const app = express();

app.use(cors());

mongoose.connect(process.env.MONGODB_CONNECTION_URI, { useNewUrlParser: true })
    .then(() => {
        app.use("/api", routes); // Make sure your routes are set up correctly.

        app.listen(3005, () => {
            console.log("Server has started!");
        });
    })
    .catch(err => {
        console.error("Database connection error:", err);
    });
