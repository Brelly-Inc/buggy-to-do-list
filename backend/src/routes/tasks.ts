// src/routes/tasks.ts
import { Router } from "express";
import { getTasks, createTask, updateTask, deleteTask } from "../controllers/tasksController";

const router = Router();

router.get("/tasks", getTasks);
router.post("/tasks", createTask);
router.put("/task/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

export default router;
