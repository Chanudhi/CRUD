const User = require("../Model/UserModel");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
};

const addUser = async (req, res) => {
    const { name, email, age, address } = req.body;

    try {
        const newUser = new User({ name, email, age, address });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Error adding user", error });
    }
};

module.exports = { getAllUsers, addUser };
