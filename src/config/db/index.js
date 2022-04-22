const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev'
        // ,
        // {
        //     useNewUrlParsers: true,
        //     useUnifiedTopology: true,
        // }
        );
        console.log('Connected successfully!!!');
    } catch (error) {
        console.log('Error connecting');
    }
}

module.exports = {connect}