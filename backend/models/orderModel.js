const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
  title: String,
  image: String,
  people: {
    type: Number,
    required: [true, 'Please enter number of people'],
  },
  nights: {
    type: Number,
    required: [true, 'Please enter number of nights'],
  },
  price: Number,
  status: {
    type: String,
    enum: ['New', 'Pending', 'Paid', 'Cancelled'],
    default: 'New',
  },
  listing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Listing',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
})

module.exports = mongoose.model('Order', orderSchema)
