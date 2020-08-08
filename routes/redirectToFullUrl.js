const shortUrl = require('../models/short-url')

const handlerRedirectToFullUrl = async (req, res) => {
  const url = await shortUrl.findOne({ short: req.params.shortUrl })
  
  if (url == null) return res.sendStatus(404)

  url.clicks++
  url.save()

  res.redirect(url.full)
}

module.exports = handlerRedirectToFullUrl