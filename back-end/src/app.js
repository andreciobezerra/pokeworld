/**
 * @brief Initial point for app
 * @author Andrécio Costa Bezerra
 * @date 16/04/2020
*/

import 'dotenv/config'
import cors from 'cors'
import bodyParser from 'body-parser'
import express from 'express'
import connectDb from './config/configDb'
import authRouter from './routes/auth'

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
  .then(() => app.listen(process.env.PORT, () => console.log(`Comics Creators listening at port ${process.env.PORT}`)))
  .catch((error) => console.error(error))