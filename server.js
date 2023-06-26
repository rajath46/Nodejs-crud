const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express()

const EmployeeRoute = require('./routes/employee')


mongoose.connect("mongodb://127.0.0.1:27017/testdb", {useNewUrlParser:true, useUnifiedTopology:true},
(err) =>{
    if(err)
    {
        console.log(err)
    }else{
        console.log("successfully connected")
    }
})

app.listen(3005, ()=>{
    console.log("on port 3005")
})

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())



app.use('/api/employee', EmployeeRoute)
