const mongoose = require('mongoose');
let colors = require('colors');
mongoose.connect('mongodb://localhost/simplejwt', {
    useNewUrlParser:true,
    useUnifiedTopology:true

})
    .then(db => console.log('Database is connected'.green));