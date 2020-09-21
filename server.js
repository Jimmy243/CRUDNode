require('./models/db'); //database mongodb
const express = require("express");
const path = require("path"); // schema to find the view or file
const exphbrs = require("express-handlebars"); //
const bodyparser = require("body-parser");     // 
const employeeController = require("./controllers/employeeController"); // add,edit,update,delete employee back-end 

var app = express();

app.set("views",path.join(__dirname,'/views/'));
app.engine('hbs',exphbrs({extname:'hbs',defaultLayout:'mainLayout',layoutsDir:__dirname+'/views/layouts'}));
app.set("view engine",'hbs');

// Take the information posted of users // that's the job of package body-parser !
app.use(bodyparser.urlencoded({
  extended:true
}));
app.use(bodyparser.json());

var port= 3000;
app.listen(port,()=>{
  console.log("Express server is started in port: "+port);
})

app.use('/employee',employeeController);