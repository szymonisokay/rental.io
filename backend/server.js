const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000
const connectDB = require('./db/connection')
const { errorHandler } = require('./middleware/errorMiddleware')

const app = express()

app.use('/api/listings/', require('./routes/listingsRoutes'))

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
  connectDB()
})
