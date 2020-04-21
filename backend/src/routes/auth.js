/**
 * @brief Authentication router
 * @author Andrécio Costa Bezerra
 * @date 16/04/2020
*/
const { Router } = require('express')
const { body } = require('express-validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/user')
const verifyToken = require('../lib/verifyToken')


const authRouter = Router()
const secret = process.env.SECRET

authRouter.post(
  '/signup',
  [body('username').escape().trim(), body('email').escape().trim(), body('password').escape().trim()],
  (req, res) => {
    let hashedPassword = bcrypt.hashSync(req.body.password, 8)
    User.create(
      { username: req.body.username, email: req.body.email, password: hashedPassword },
      (err, user) => {
        if (err) { return res.status(500).send('There was a problem with registration') }

        const token = jwt.sign({ id: user._id }, secret, { expiresIn: 86400 })

        return res.status(200).send({ auth: true, token })
      }
    )
  })

authRouter.post(
  '/login',
  [body('email').escape().trim(), body('password').escape().trim()],
  (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) { return res.status(500).send('There was a error on the server!') }
      if (!user) { return res.status(404).send('User not found!') }

      const passwordIsValid = bcrypt.compareSync(req.body.password, user.password)

      if (!passwordIsValid) { return res.status(401).send({ auth: false, token: null }) }

      const token = jwt.sign({ id: user._id }, secret, { expiresIn: 86400 })
   
      return res.status(200).send({ auth: true, token })
    })
  })

authRouter.get('/me', verifyToken, (req, res) => {
  User.findById(req.userId, { password: 0 }, (err, user) => {
    if (err) { return res.status(500).send('There was a problem finding a user!') }
    if (!user) { return res.status(404).send('No user found!') }

    return res.status(200).send(user)
  })
})


module.exports = authRouter