import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { getFeedbacks, addFeedbacks } from "../controllers/Feedbacks.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);
router.get("/feedbacks", getFeedbacks);
router.post("/feedbacks", addFeedbacks);

export default router;