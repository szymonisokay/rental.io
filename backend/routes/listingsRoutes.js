const express = require('express')
const {
  getListings,
  getOneListing,
} = require('../controllers/listingsController')

const router = express.Router()

router.get('/', getListings)
router.get('/:id', getOneListing)

module.exports = router
