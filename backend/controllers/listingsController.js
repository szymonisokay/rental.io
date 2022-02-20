const Listing = require('../models/listingModel')
const asyncHandler = require('express-async-handler')

const getListings = asyncHandler(async (req, res) => {
  const limit = req.query.limit || 10

  const listings = await Listing.find({}).limit(limit)

  res.status(200).json({ listings })
})

const getOneListing = asyncHandler(async (req, res) => {
  const { id } = req.params
  const singleListing = await Listing.findById(id)

  if (!singleListing) {
    res.status(404)
    throw new Error('Listing not found')
  }

  res.status(200).json({ singleListing })
})

module.exports = {
  getListings,
  getOneListing,
}
