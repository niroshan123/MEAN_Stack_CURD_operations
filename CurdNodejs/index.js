// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const { mongoose } = require('./db.js');
// var employeeController = require('./controllers/employeeController.js');

// var app = express();
// app.use(bodyParser.json());
// app.use(cors({ origin: 'http://localhost:4200' }));

// app.listen(3000, () => console.log('Server started at port : 3000'));


// app.use('/employees', employeeController);

const express=require('express');
const bodyParser=require('body-parser');//ppackage imports
const cors = require('cors');

const { mongoose }=require('./db.js');//local import
var employeeController = require('./controllers/employeeController.js');
//request for employeeController variable

var app=express();//working with express package
app.use(bodyParser.json());//send json data to node project

app.use(cors({ origin: 'http://localhost:4200' }));


app.listen(3000,()=>
    console.log('Server started at port : 3000'));
//starting the express seerver
app.use('/employees', employeeController);//in order to add routers from employeeController to this application