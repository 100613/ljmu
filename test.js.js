<<<<<<< HEAD:test.js.js
//first NodeJS application 

const express = require('express') 
const app = express() 
const port = 3000 

app.get('/', (req, res) => { 
  res.send('Hello Virtual Machine!') 
}) 

app.listen(port, () => { 
  console.log(`Express Application  listening at port 3000`) 
}) 
=======
//first NodeJS application
const express=require('express')
const app = express()
const port=3000
app.get('/',(req,res)=>{
  res.send('Hello Virtual Machine!')
})
app.listen(port,()=>{
  console.log(`Express Application  listening at port 3000`)
})
>>>>>>> 83f2fbb8a85da564abdd06a143796302ab795180:test.js
