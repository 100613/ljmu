//first NodeJS application 
git config --global user.email "100613@oryx.edu.qa"
git config --global user.name "100613"

const express = require('express') 
const app = express() 
const port = 3000 
 
app.get('/', (req, res) => { 
  res.send('Hello Virtual Machine!') 
}) 
 
app.listen(port, () => { 
  console.log(`Express Application  listening at port 3000`) 
}) 