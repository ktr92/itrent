import * as axios from 'axios'
const keys = require('../keys')

module.exports.login = async (req, res) => {
  const sendData = { ...req.body, grant_type: 'password', client_id: keys.client_id, client_secret: keys.client_secret }
  await axios.post('https://api-broker.demo.ipotech.su/oauth2/token', sendData).then(function (response) {
    res.status(200).json(response.data)
  }).catch(function (error) {
    res.status(error.response.data.code).json(error.response.data)
  })
}