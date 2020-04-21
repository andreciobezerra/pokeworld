/**
 * @brief Initial point for app
 * @author Andrécio Costa Bezerra
 * @date 16/04/2020
*/

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDb = require('./config/configDb')
const authRouter = require('./routes/auth')

const app = express()

//App-level middlewares

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//Routers middlewares
app.use('/auth', authRouter)

// Error handler middleware
app.use((err, req, res) => {
  console.error(err.stack)
  res.status(500).send('Ops, something is wrong! Error:')
})

//Start
connectDb(app.get('env'))
  .then(() => app.listen(process.env.PORT, () => console.log(`Pokeworld listening at port ${process.env.PORT}`)))
  .catch((error) => console.error(error))