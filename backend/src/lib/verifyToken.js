/**
 * @brief Functions for verify tokens
 * @author Andrécio Costa Bezerra
 * @date 16/04/2020
*/

const { verify } = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token']
  console.log(token)
  if (!token) { return res.status(403).send({ auth: false, message: 'No token provided.' }) }

  verify(token, process.env.SECRET, (err, decoded) => {
    if (err) { return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' }) }
    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyToken