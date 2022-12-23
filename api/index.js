const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send(`Express started on port ${port}`)
})

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`)
})