const express = require('express')
const app = express()

app.get('/', (req,res)=>{
  res.json({ teste:'ok' })
})

app.listen(3334)

