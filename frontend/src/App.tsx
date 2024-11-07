import React, { useState, useEffect } from "react";
import axios from "axios";
import { Task } from "./models/Task";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Fetch tasks on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get<{ tasks: Task[] }>("/api/task");
        setTasks(response.data.tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        height: "100wh",
        width: "100vw",
      }}
    >
      <img
        src="assets/brelly-logo.png"
        style={{
          position: "absolute",
          height: 50,
          left: 20,
          top: 20,
        }}
      />
      <div>
        <h1>To-Do List</h1>
        <div style={{ minWidth: 400, maxWidth: "70wv" }}>
          <AddTask setTasks={setTasks} />
          <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </div>
  );
};

export default App;
