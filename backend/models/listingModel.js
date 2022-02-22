const mongoose = require('mongoose')

const listingSchema = mongoose.Schema({
  _id: String,
  listing_url: String,
  name: String,
  space: String,
  description: String,
  neighborhood_overview: String,
  notes: String,
  transit: String,
  access: String,
  interaction: String,
  house_rules: String,
  property_type: String,
  room_type: String,
  bed_type: String,
  minimum_nights: String,
  maximum_nights: String,
  cancellation_policy: String,
  last_scraped: Date,
  calendar_last_scraped: Date,
  accommodates: Number,
  bedrooms: Number,
  beds: Number,
  number_of_reviews: Number,
  bathrooms: mongoose.Decimal128,
  amenities: [String],
})

module.exports = mongoose.model('Listing', listingSchema, 'listingsAndReviews')
