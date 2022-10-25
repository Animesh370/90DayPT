const connectToDb = require('./db')
const express = require('express');
require('dotenv').config();

connectToDb();
const app = express();
const port = process.env.PORT

app.use(express.json())


app.use('/api/auth', require('./routes/auth'))

app.listen(port, () => {
  console.log(`Server is up and running on  http://localhost:${port}`)
})