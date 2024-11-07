import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

import axios from "axios";
import { Task } from "../models/Task";

interface AddTaskProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const AddTask: React.FC<AddTaskProps> = ({ setTasks }) => {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      const response = await axios.post<Task>("/api/task", { title });
      setTasks((prevTasks) => [...prevTasks, response.data]);
      setTitle("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        alignItems: "center",
        marginBottom: 20,
        display: "flex",
        width: "100%",
      }}
    >
      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => {
          title = e.target.value;
        }}
        style={{
          paddingLeft: 10,
          fontSize: 18,
          height: 36,
          width: "100%",
        }}
      />

      <button
        type="submit"
        style={{
          alignItems: "center",
          display: "flex",
          borderRadius: 3,
          marginLeft: 10,
          padding: 7,
          height: 44,
        }}
      >
        <AiOutlinePlus style={{ fontSize: 30 }} />
      </button>
    </form>
  );
};

export default AddTask;
