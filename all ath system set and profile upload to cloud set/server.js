//Winetasting server file
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')
const path = require('path')
const bodyParser = require('body-parser');
const fileRoutes = require('./routes/file-upload-router');


//connectDB
connectDB();


const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json());
//routes
app.use('/api', require('./routes/authRouter'))
app.use('/api', require('./routes/wineCategoryRouter'))
app.use('/api', require('./routes/userRouter'))
// app.use('/api', require('./routes/file-upload-router'))

app.use('/api', fileRoutes.routes);

//on production
if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname,'/client/build')))
  app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
  app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','build','index.html'))
  })
}else{
  // on development
  app.get('/', (req,res)=>{
    res.send('Winetasting Api running');
  })
}

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, ()=>console.log(`Winetasting Server running on port http://localhost:${PORT}`))

//handle server crash error
process.on('unhandleRejection', (err,promise) =>{
  console.log(`Logged Error:${err}`)
  server.close(()=>process.exit(1))
})
