const shortUrl = require('../models/short-url')

const handlerIndex = async (req, res) => {
  const shortUrls = await shortUrl.find()
  res.render('index', { shortUrls })
}

module.exports = handlerIndex