const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if email already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }

        // Create new user
        const newUser = new UserModel({ username, email, password });
        await newUser.save();

        res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
        console.error("Registration Error:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) return res.status(400).json({ error: "Invalid credentials" });

        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: "err.message" });
    }
}

// Get Dashboard (protected route)
const getDashboard = async (req, res) => {
    try {
        res.json({ user: req.user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { signup, login, getDashboard };