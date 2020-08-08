const shortUrl = require('../models/short-url')

const handlerShortUrl = async (req, res) => {
  try {
    await shortUrl.create({ full: req.body.fullUrl })
    res.redirect('/')
  } catch (error) {
    console.log('ERRO:', error)
  }
}

module.exports = handlerShortUrl