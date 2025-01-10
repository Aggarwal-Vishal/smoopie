import { User } from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(200).json({
        message: "User already exists",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({
      message: "User created Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Failed to register",
      success: false,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields required",
        success: false,
      });
    }
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Incorrect Email or passsword",
        success: false,
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Email or Password is incorrect",
        success: false,
      });
    }
    generateToken(res, user, `Welcome back ${user.name}`);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to login",
      success: false,
    });
  }
};

export const logout = async (req, res) => {
  try {
    return res.status(201).cookie("token", " ", { maxAge: 0 }).json({
      message: "Logged Out Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
