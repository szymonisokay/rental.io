const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please provide all data')
  }

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPass = await bcrypt.hash(password, salt)

  const user = await User.create({
    ...req.body,
    password: hashedPass,
  })

  const token = jwt.sign({ id: user._id }, process.env.SECRET, {
    expiresIn: '1d',
  })

  const userData = {
    id: user._id,
    name: user.name,
    email: user.email,
    token,
  }

  res.status(200).json({ user: userData })
})

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    res.status(400)
    throw new Error('Please provide all data')
  }

  const user = await User.findOne({ email: email })

  if (!user) {
    res.status(404)
    throw new Error('User not found')
  }

  const passwordsDoMatch = await bcrypt.compare(password, user.password)

  if (!passwordsDoMatch) {
    res.status(400)
    throw new Error('Wrong credentials')
  }

  const token = jwt.sign({ id: user._id }, process.env.SECRET, {
    expiresIn: '1d',
  })

  const loggedInUser = {
    id: user._id,
    name: user.name,
    email: user.email,
    token,
  }

  res.status(200).json({ user: loggedInUser })
})

module.exports = {
  registerUser,
  loginUser,
}
