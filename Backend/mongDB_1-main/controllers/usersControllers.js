const Users = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Signup
const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Signup request received:", { email });

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Password hashed successfully");

    const newUser = await Users.create({
      email,
      password: hashedPassword,
    });

    console.log("User has been created successfully:", newUser);
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login request received:", { email });

    const user = await Users.findOne({ email });
    if (!user) {
      console.error(`User with email ${email} not found`);
      return res.status(404).json({ error: "User not found" });
    }

    console.log(`User found: ${user.email}`);

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.error(`Invalid password for user ${email}`);
      return res.status(401).json({ error: "Invalid password" });
    }

    console.log(`Password match: ${passwordMatch}`);

    const secret = process.env.SECRET;
    console.log("Secret:", secret);
    if (!secret) {
      console.error("JWT secret is not defined in environment variables");
      return res.status(500).json({ error: "Internal server error" });
    }

    const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });
    console.log(`Token created: ${token}`);

    // Set token as a cookie
    res.cookie('token', token, {
      httpOnly: true, // Ensure the cookie is sent only over HTTP(S), not client JavaScript
      secure: process.env.NODE_ENV === 'production', // Send the cookie over HTTPS in production
      maxAge: 3600000, // 1 hour
    });

    res.json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Logout
const logout = async (req, res) => {
  try {
    console.log("Logout request received");

    // Clear the token cookie
    res.clearCookie('token');

    res.json({ message: "User logged out successfully" });
  } catch (error) {
    console.error("Error during logout:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  signup,
  login,
  logout,
};
