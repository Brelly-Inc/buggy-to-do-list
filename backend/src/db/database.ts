// src/db/database.ts
import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Open a database connection
export const getDatabase = async () => {
  const db = await open({
    filename: "./tasks.db",
    driver: sqlite3.Database,
  });

  return db;
};

const initializeDatabase = async () => {
  const db = await getDatabase();

  // Create the tasks table if it doesn't exist
  await db.exec(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      completed BOOLEAN DEFAULT 0
    )
  `);

  return db;
};

export default initializeDatabase;
