require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('rakshi')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login </h1>')
})

app.get('/chai',(req,res)=>{
    res.send('<h2>hello chai</h2>')
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})