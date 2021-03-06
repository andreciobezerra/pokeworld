/**
 * @brief User model
 * @author Andrécio Costa Bezerra
 * @date 16/04/2020
*/

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, unique: true, minlength: 8 }
})

const User = mongoose.model('User', userSchema)

module.exports = User