const Listing = require('../models/listingModel')
const asyncHandler = require('express-async-handler')

const getListings = asyncHandler(async (req, res) => {
  const limit = req.query.limit || 12
  const sort = req.query.sort
  const dest = req.query.dest

  let sortOption = ''
  if (sort === 'price_asc') sortOption = { price: 'asc' }
  else if (sort === 'price_desc') sortOption = { price: 'desc' }
  else if (sort === 'name_asc') sortOption = { name: 'asc' }
  else if (sort === 'name_desc') sortOption = { name: 'desc' }

  console.log(dest)

  let listings

  if (!dest) {
    listings = await Listing.find({}).limit(limit).sort(sortOption)
  } else {
    listings = await Listing.find({ 'address.country': dest })
      .limit(limit)
      .sort(sortOption)
  }

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
