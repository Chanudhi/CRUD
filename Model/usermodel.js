const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,//get data type
        required:true,//validate
    },
    gmail:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model(
    "usermodel",//filename
    userSchema//functionschema

)