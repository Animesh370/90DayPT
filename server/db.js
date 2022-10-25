const mongoose = require('mongoose');
require('dotenv').config();

const connectToDb = () => {
  mongoose.connect(process.env.MONGO_URL, () => {
    console.log('Connected to Database Successfully')
  })
}

module.exports = connectToDb;