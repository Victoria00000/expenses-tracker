const mongoose = require('mongoose');

const connection = mongoose.connect(process.env.ATLAS_URI)
    .then(db => {
        console.log('The database is connected.');
        return db;
    }).catch(err => console.log(err));


module.exports = connection;