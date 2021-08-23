'use strict';
const dotenv = require('dotenv');
const express = require('express');
const routes = require('./routes');


const app = express();
dotenv.config();

app.use(routes);

app.use((req, res, next) => {
    return res.status(404).json({
        error: "Not Found",
    });
});

module.exports = { app };
