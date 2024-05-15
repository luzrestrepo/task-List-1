import { useState, useEffect } from "react";

const useTaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editInput, setEditInput] = useState("");
  const [taskInput, setTaskInput] = useState("");

  const createTask = () => {
    if (taskInput.trim()) {
      const newTask = { text: taskInput, isCompleted: false };
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
      setTaskInput("");
      localStorage.setItem("tasks", JSON.stringify(newTasks));
    }
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task, index) => index !== id);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const toggleComplete = (id) => {
    const newTasks = [...tasks];
    newTasks[id].isCompleted = !newTasks[id].isCompleted;
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const handleEdit = (id) => {
    setEditingId(id);
    setEditInput(tasks[id].text);
  };

  const saveEdit = (id) => {
    const newTasks = [...tasks];
    newTasks[id].text = editInput;
    setTasks(newTasks);
    setEditingId(null);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const handleTaskInputChange = (value) => {
    setTaskInput(value);
  };

  const handleEditInputChange = (value) => {
    setEditInput(value);
  };

  return {
    tasks,
    editingId,
    editInput,
    taskInput,
    createTask,
    deleteTask,
    toggleComplete,
    handleEdit,
    saveEdit,
    cancelEdit,
    handleTaskInputChange,
    handleEditInputChange,
  };
};

export default useTaskList;
