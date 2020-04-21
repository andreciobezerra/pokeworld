/**
 * @brief Configuration from database
 * @author Andrécio Costa Bezerra
 * @date 16/04/2020
*/

const mongoose = require('mongoose')

const databaseURL = (env) => (env === 'development') ? process.env.DEV_DATABASE_URL : process.env.PROD_DATABASE_URL

const connectDb = (env) => mongoose.connect(databaseURL(env), { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })

module.exports = connectDb