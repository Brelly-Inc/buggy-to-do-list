// src/index.ts
import express from "express";
import taskRoutes from "./routes/tasks";
import initializeDatabase from "./db/database";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Use the task routes
app.use("/api", taskRoutes);

app.listen(PORT, async () => {
  console.log("Initialize database..");
  await initializeDatabase();
  console.log(`Server is running on port ${PORT}`);
});
