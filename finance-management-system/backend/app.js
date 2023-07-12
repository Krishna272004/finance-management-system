const express = require("express");
const mongoose = require("mongoose");
const MONGO_URL ="mongodb://127.0.0.1:27017/expensetracker"
const body=require('body-parser')
const app=express();
const port=8000;
mongoose.set("strictQuery",true);
mongoose.connect(MONGO_URL);

app.post("/ADD CUSTOMER",(req,res)=>{ 
    let Name=req.body.name;
    let Phonenumber = req.body.phonenumber;
    let Adress=req.body.adress;
    let Amount=req.body.amount;   
    let Date=req.body.date;

    expense.create({
        name:Name,
        phonenumber:Phonenumber,
        adress:Adress,
        amount:Amount,
        date:Date
    })
    .then(()=>{
        res.status(201).json(expense)
    })
})
app.listen(port,()=>{
    console.log("The server is listening to the port 8000");
});

