import React from "react";
import { Task } from "../models/Task";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks }) => {
  return (
    <div style={{ maxHeight: "60vh", overflow: "auto" }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} setTasks={setTasks} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
