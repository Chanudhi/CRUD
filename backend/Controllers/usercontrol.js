const User = require("../../Model/usermodel");

// Display all users
const getAllUsers = async (req, res, next) => {
    let users;

    try {
        users = await User.find();
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error while fetching users." });
    }

    // No users found
    if (!users || users.length === 0) {
        return res.status(404).json({ message: "No users found." });
    }

    // Display users
    return res.status(200).json({ users });
};

// Add a new user
const addUsers = async (req, res, next) => {
    const { name, gmail, age, address } = req.body;

    let user;

    try {
        user = new User({ name, gmail, age, address });
        await user.save();
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error while adding user." });
    }

    // Successfully added
    return res.status(201).json({ user });
};

// Get user by ID
const getById = async (req, res, next) => {
    const id = req.params.id;

    let user;

    try {
        user = await User.findById(id);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error while fetching user by ID." });
    }

    // User not found
    if (!user) {
        return res.status(404).json({ message: "User not found." });
    }

    return res.status(200).json({ user });
};

// Update user details
const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const { name, gmail, age, address } = req.body;

    let user;

    try {
        user = await User.findByIdAndUpdate(
            id,
            { name, gmail, age, address },
            { new: true } // Return the updated document
        );
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error while updating user." });
    }

    // User not found
    if (!user) {
        return res.status(404).json({ message: "Unable to update user details. User not found." });
    }

    return res.status(200).json({ user });
};
//delete user details
const deleteUser = async(req, res,next)=> {
    const id = req.params.id;

    let user;

    try{
        user = await User.findByIdAndDelete(id);
    }catch(err){
        console.error(err);    
    }
    if(!user){
        return res.status(404).json({message: "Unable to delete user. User not found."});
    }
    return res.status(200).json({user});
};
exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;