const express = require('express')
const multer = require('multer');
const bodyParser = require('body-parser')
const route = require('./routes/route')
const mongoose = require('mongoose')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use( multer().any())

mongoose.connect("mongodb+srv://FunctionUp:surbhi231@cluster0.ufu0v.mongodb.net/Project5", {
    usenewurlParser: true
})
.then(() => console.log("MongoDb is connected..."))
.catch(error => console.log(error)) 

app.use("/", route)

app.listen(process.env.PORT || 3000, function(){
    console.log("Express app running on port " + (process.env.PORT || 3000))
})