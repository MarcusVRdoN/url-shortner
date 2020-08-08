const express = require('express')
const app = express()
const dotenv = require('dotenv')

const database = require('./database')

const index = require('./routes/index')
const shortUrl = require('./routes/short-url')
const redirectToFullUrl = require('./routes/redirectToFullUrl')

dotenv.config()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', index)
app.post('/short-url', shortUrl)
app.get('/:shortUrl', redirectToFullUrl)

app.listen(process.env.PORT)