import express from "express";
import { login, logout, register } from "../controller/user.controller.js";
import { recipie } from "../models/recipe.model.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/add/recipie", isAuthenticated).post(recipie);
router.route("/logout").post(logout);

export default router;
