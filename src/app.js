const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./db');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(require('./routes'));

app.use((err, req, res, next) => {
    // console.error(err.stack); // Log the error
    res.status(500).json({ message: "Internal Server Error" }); // Respond with a generic error message
});

module.exports = app;