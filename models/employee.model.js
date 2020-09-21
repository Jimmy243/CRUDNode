const mongoose = require("mongoose");
//to connect mongoose to schema references in there collection 
var employeeSchema = new mongoose.Schema({
         fullname:{type:String},
         email:{type:String},
         mobile:{type:String},
         city:{type:String}
});

mongoose.model('employees',employeeSchema); //connect in collection like employees 