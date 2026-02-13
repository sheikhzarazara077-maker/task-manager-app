import express from "express";
import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";
import validator from "../middlewares/validator.js";
import {
  createTaskSchema,
  updateTaskSchema,
} from "../validators/taskValidator.js";

const router = express.Router();

router.post("/", validator(createTaskSchema), createTask);
router.get("/", getAllTasks);
router.get("/:id", getTaskById);
router.put("/:id", validator(updateTaskSchema), updateTask);
router.delete("/:id", deleteTask);

export default router;
