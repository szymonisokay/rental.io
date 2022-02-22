const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Listing = require('../models/listingModel')
const Order = require('../models/orderModel')

const getOrders = asyncHandler(async (req, res) => {
  const listings = await Listing.find({ user: req.user.id })

  if (!listings) {
    res.status(400)
    throw new Error('Nothing found')
  }

  res.status(200).json({ listings })
})

const createOrder = asyncHandler(async (req, res) => {
  const { people, listingId, nights } = req.body

  if (!people || !listingId || !nights) {
    res.status(400)
    throw new Error('Please provide all data')
  }

  const listing = await Listing.findById(listingId)

  if (!listing) {
    res.status(400)
    throw new Error('Listing not found')
  }

  const price = nights * people

  console.log(listing.bathroom)

  res.status(200).json({ listing })
})

module.exports = {
  getOrders,
  createOrder,
}
