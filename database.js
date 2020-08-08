const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const URI = `mongodb+srv://${process.env.MONGODB_ATLAS_USER}:${process.env.MONGODB_ATLAS_PASSWORD}@${process.env.MONGODB_ATLAS_HOST}/${process.env.MONGODB_ATLAS_DATABASE}?retryWrites=true&w=majority`

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(response => console.log('MONGO CONNECTED!'))
  .catch(error => console.log('MONGO ERROR:', error.message))