const express = require('express');
const app = express();

const cors = require('cors');

require('dotenv').config({ path: './config.env' });
const port = 5000;

// USE MIDDLEWARE //
app.use(cors());
app.use(express.json());

// USING THE ROUTES //
app.use(require('./routes/route'));

// MONGODB CONNECTION //
const conn = require('./db/connection');
conn.then(db => {
    if (!db) return process.exit(1);
    // RUNNING THE HTTP SERVER ON PORT //
    app.listen(port, () => {
        console.log(`The server is running on port: ${port}`)
    });
    // SERVER ERRORS DETECTOR //
    app.on('error', err => console.log('Connection with the server failed! ERROR: ', err));
}).catch(err => console.log(err)); // MONGODB ERRORS DETECTOR //