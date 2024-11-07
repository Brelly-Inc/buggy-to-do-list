import React from "react";
import { BsTrash } from "react-icons/bs";
import axios from "axios";
import { Task } from "../models/Task";
import { AiOutlineClose } from "react-icons/ai";

interface TaskItemProps {
  task: Task;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, setTasks }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/tasks/${task}`);
      setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleToggle = async () => {
    try {
      const response = await axios.put<{ task: Task }>(`/api/tasks/${task.id}`, {
        completed: !task.completed,
      });
      const updatedTask = response.data.task;
      setTasks((prevTasks) => prevTasks.map((t) => (t.id === task.id ? updatedTask : t)));
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
        style={{ marginRight: 10, height: 20 }}
      />

      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          flexGrow: 1,
        }}
      >
        {task.title}
      </span>

      <AiOutlineClose
        onClick={handleDelete}
        style={{
          color: "#880808",
          marginRight: 10,
          marginLeft: 30,
          fontSize: 24,
        }}
      />
    </li>
  );
};

export default TaskItem;
