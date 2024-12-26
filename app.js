
//pw=iCL0ZPNLZZ4v076w

const express = require("express");
const mongoose = require("mongoose");

const app = express();

//middleware

app.use("/",(req, res,next) =>{
    res.send("It is working ..yayy");
})

mongoose.connect("mongodb+srv://admin:iCL0ZPNLZZ4v076w@cluster0.p7sns.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.then(()=> {
    app.listen(5000);
})
.catch((err)=> console.log((err)));