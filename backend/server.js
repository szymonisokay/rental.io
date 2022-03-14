const express = require('express')
const dotenv = require('dotenv').config()
var cors = require('cors')

const PORT = process.env.PORT || 5000
const connectDB = require('./db/connection')
const { errorHandler } = require('./middleware/errorMiddleware')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/api/auth/', require('./routes/authRoutes'))
app.use('/api/listings/', require('./routes/listingsRoutes'))
app.use('/api/orders/', require('./routes/ordersRoutes'))

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
  connectDB()
})
