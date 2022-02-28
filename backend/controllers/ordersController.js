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

  const price = nights * people * parseFloat(listing.price)

  const order = await Order.create({
    title: listing.name,
    iamge: listing.images.picture_url,
    people,
    nights,
    price,
    pricePerNight: listing.price,
    listing: listing._id,
    user: req.user.id,
  })

  res.status(200).json({ order })
})

const deleteOrder = asyncHandler(async (req, res) => {
  const { id: userId } = req.user
  const { id: orderId } = req.params

  const order = await Order.findOneAndDelete({
    _id: orderId,
    user: userId,
  })

  if (!order) {
    res.status(400)
    throw new Error('Order does not exist')
  }

  res.status(200).json({ order })
})

module.exports = {
  getOrders,
  createOrder,
  deleteOrder,
}
