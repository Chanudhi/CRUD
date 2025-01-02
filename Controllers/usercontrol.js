const User = require("../Model/usermodel");
//display
const getAllUsers = async(req, res, next) =>{

    let Users;

    try{
        users = await User.find();

    }catch(err){
        console.log(err);
    }
    //no users
    if(!users){
        return res.status(404).json({message:"User not found"});
    }
    //display func
    return res.status(200).json({users});
};
//data insert
const addUsers = async(req, res, next) =>{

    const {name,gmail,age,address} = req.body;

    let users;

    try{
        users = new User({name,gmail,age,address});
        await users.save();

    }catch(err){
        console.log(err);
    }
    //don't insert user
    if(!users){
        return res.status(404).json({message:"unable to add users"});
    }
    return res.status(200).json({users});

};

//get by id
const getById = async(req, res,next) =>{

    const id = req.params.id;

    let user;
    
    try{
        user = await User.findById(id);
    }catch(err) {
        console.log(err);
    }
    //not found
    if(!users){
        return res.status(404).json({message:"User not found"});
    }
    return res.status(200).json({user});

}

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;

