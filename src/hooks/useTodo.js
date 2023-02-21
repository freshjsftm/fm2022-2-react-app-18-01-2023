import { useState } from "react";

const useTodo = () => {
  const [tasks, setTasks] = useState([
    { id: Date.now(), body: "test", isDone: false },
  ]);
  const addTask = (value) =>
    setTasks([...tasks, { id: Date.now(), body: value, isDone: false }]);
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => id !== task.id));
  }; //filter
  const isDoneTask = (id) => {
    setTasks(
      tasks.map((task) =>
        id === task.id ? { ...task, isDone: !task.isDone } : task
      )
    );
  }; //map
  return { tasks, addTask, deleteTask, isDoneTask };
};

export default useTodo;
