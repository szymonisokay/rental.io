const Listing = require('../models/listingModel')

const getListings = async (req, res) => {
  const listings = await Listing.findOne()

  res.status(200).json({ listings })
}

const getOneListing = async (req, res) => {
  const { id } = req.params
  const singleListing = await Listing.findById(id)

  res.status(200).json({ singleListing })
}

module.exports = {
  getListings,
  getOneListing,
}
