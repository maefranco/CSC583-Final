const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      bcrypt = require('bcryptjs')

var Visitor = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    // required: true,
    // unique: true,
    trim: true
  },
  phone: {
    type: String,
    // unique: true,
    // required: true,
    trim: true
  },
  company: {
    type: String,
    // required: true
  },
  officialVisit: {
    type: boolean,
    // required: true
  },
  escortRequired: {
    type: boolean,
    // required: true
  },
  escortName: {
    type: String,
    trim: true
  }
})

module.exports = mongoose.model('Visitor', Visitor)
