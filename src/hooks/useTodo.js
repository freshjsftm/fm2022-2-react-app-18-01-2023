import { useState } from "react";

const useTodo = () => {
  const [tasks, setTasks] = useState([]);
  const addTask = (value) =>
    setTasks([...tasks, { id: Date.now(), body: value, isDone: false }]);
  const deleteTask = (id) => {};//filter
  const isDoneTask = (id) => {};//map
  return { tasks, addTask, deleteTask, isDoneTask };
};

export default useTodo;
