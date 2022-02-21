const jwt = require('jsonwebtoken')

const authorization = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401)
    throw new Error('Not authorized')
  }

  next()
}

module.exports = {
  authorization,
}
