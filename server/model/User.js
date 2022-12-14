const mongoose = require('mongoose');
const {Schema } = require('mongoose')

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    min: 16,
    max: 60,
  },
  password: {
    type: String,
    required: true
  }
})

const User = mongoose.model('user', UserSchema)

module.exports = User;