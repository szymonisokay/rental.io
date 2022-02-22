const express = require('express')
const { getOrders, createOrder } = require('../controllers/ordersController')
const { authorization } = require('../middleware/authMiddleware')

const router = express.Router()

router.route('/').get(authorization, getOrders)
router.route('/').post(authorization, createOrder)

module.exports = router
