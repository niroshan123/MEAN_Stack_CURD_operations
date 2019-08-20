const express=require('express');
const bodyParser=require('body-parser');//ppackage imports

const {mongoose}=require('./db.js');//local import
var employeeController = require('./controllers/employeeControllers.js');//request for employeeController variable

var app=express();//working with express package
app.use(bodyParser.json());//send json data to node project

app.listen(3000,()=>{
    console.log('Server started at port : 3000')
});//starting the express seerver
app.use('/employees',employeeController);//in order to add routers from employeeController to this application