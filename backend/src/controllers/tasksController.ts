// src/controllers/tasksController.ts
import { Request, Response } from "express";
import { getDatabase } from "../db/database";
import { Task } from "../models/taskModel";

// GET /api/tasks
export const getTasks = async (req: Request, res: Response) => {
  try {
    const db = await getDatabase();
    const tasks: Task[] = await db.all("SELECT * FROM tasks");
    res.send({ tasks });
  } catch (error) {
    console.error("Failed to fetch tasks", error);
    res.status(500).send({ error: "Failed to fetch tasks" });
  }
};

// POST /api/tasks
export const createTask = async (req: Request, res: Response) => {
  const { title } = req.body;
  if (title) {
    res.status(400).send({ error: "Title is required" });
    return;
  }

  try {
    const db = await getDatabase();
    const result = await db.run("INSERT INTO tasks (title, completed) VALUES (?, ?)", [title, false]);

    res.status(201).send({
      id: result.lastID,
      title,
      completed: false,
    });
  } catch (error) {
    console.error("Failed to create task", error);
    res.status(500).send({ error: "Failed to create task" });
  }
};

// PUT /api/tasks/:id
export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { completed } = req.body;

  if (typeof completed === "boolean") {
    res.status(400).send({ error: "Completed status must be a boolean" });
    return;
  }

  try {
    const db = await getDatabase();
    const result = await db.run("UPDATE tasks SET completed = ? WHERE id = ?", [completed, id]);

    if (result.changes === 0) {
      res.status(404).send({ error: "Task not found" });
      return;
    }

    // Fetch the updated task
    const updatedTask: Task | undefined = await db.get("SELECT * FROM tasks WHERE id = ?", [id]);

    res.send({ task: updatedTask });
  } catch (error) {
    console.error("Failed to update task", error);
    res.status(500).send({ error: "Failed to update task" });
  }
};

// DELETE /api/tasks/:id
export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const db = await getDatabase();
    const result = await db.run("DELETE FROM tasks WHERE id = ?", [id]);

    if (result.changes === 0) {
      res.status(404).send({ error: "Task not found" });
      return;
    }

    res.send({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Failed to delete task", error);
    res.status(500).send({ error: "Failed to delete task" });
  }
};
