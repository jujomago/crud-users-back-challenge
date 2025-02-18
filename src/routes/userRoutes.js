import { Router } from "express";
import {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
import { authenticate } from "../middlewares/authenticate.js";

const router = Router();

router.get("/", authenticate, getUsers);
router.post("/", authenticate, createUser);
router.delete("/:email", authenticate, deleteUser);
router.put("/:email", authenticate, updateUser);

export default router;
