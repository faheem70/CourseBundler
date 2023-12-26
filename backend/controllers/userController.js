const User = require('../models/userModel');

exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({ email, password, name });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
