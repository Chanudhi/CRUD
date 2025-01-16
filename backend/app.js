
//pw=iCL0ZPNLZZ4v076w

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/userroute");

const app = express();

//middleware
app.use(express.json());
app.use("/users",router);


mongoose.connect("mongodb+srv://admin:iCL0ZPNLZZ4v076w@cluster0.p7sns.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.then(()=> {
    app.listen(5000);
})
.catch((err)=> console.log((err)));