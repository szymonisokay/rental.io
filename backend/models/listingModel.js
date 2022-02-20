const mongoose = require('mongoose')

const listingSchema = mongoose.Schema({
  _id: String,
})

module.exports = mongoose.model('Listing', listingSchema, 'listingsAndReviews')
