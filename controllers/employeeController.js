const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');          // connect mongoose to the collection 
const employees = mongoose.model('employees'); // name of collection like employees 

router.get('/', (req, res) => {
    res.render("employee/addOrEdit", {  // that's the page add and edit employee, so we get it 
        viewTitle: "Insert Employee" // this title of our form
    });
});

router.post('/', (req, res) => { 
// router.post is gonna post the documents into collection if is correct 
    insertRecord(req, res);
                                // if (req.body._id == '')
                                //     insertRecord(req, res);
                               //     else
                               //     updateRecord(req, res);
});


function insertRecord(req, res) {
    var employee = new employees();
    employee.fullname = req.body.fullname;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;
    employee.save((err, doc) => {
        if(!err)
             res.redirect("/employee/list")
        else{
            console.log("Error during record insertion :"+err);
        }     
    });
        
}

router.get('/list',(req,res)=>{
    res.json("From list");
});



module.exports= router;


























// const express = require("express");
// var router = express.Router();
// const mongoose = require("mongoose");
// const employees = mongoose.model("employees");

// router.get('/',(req,res)=>{
//     res.render("employee/addOredit",{
//         viewTitle: " Insert data "
//     });
// });

// router.post('/',(req,res)=>{
//     insertRec();
// });

// function insertRec(req,res){
//     var employees = new employees();
//     employees.fullname = req.body.fullname;
//     employees.email = req.body.email;
//     employees.mobile = req.body.mobile;
//     employees.city = req.body.city;
//     employees.save((err,doc)=>{
//        if(!err){
//         res.redirect('/employee/list');
//        }else{
//            console.log("Error to insert a document !" +err);
//        }
//     });
// }