const express = require('express')
const {
  getOrders,
  createOrder,
  deleteOrder,
} = require('../controllers/ordersController')
const { authorization } = require('../middleware/authMiddleware')

const router = express.Router()

router.use(authorization).route('/').get(getOrders).post(createOrder)
router.use(authorization).route('/:id').delete(deleteOrder)

module.exports = router
