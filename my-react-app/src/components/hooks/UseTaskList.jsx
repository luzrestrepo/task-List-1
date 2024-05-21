import { useState, useEffect } from "react";

const useTaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editInput, setEditInput] = useState("");
  const [taskInput, setTaskInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const createTask = () => {
    if (taskInput.trim()) {
      const newTask = {
        text: taskInput,
        description: descriptionInput,
        isCompleted: false,
      };
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
      setTaskInput("");
      setDescriptionInput("");
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
    newTasks[id].description = descriptionInput; // Guardar la descripción editada
    setTasks(newTasks);
    setEditingId(null);
    setEditInput("");
    setDescriptionInput(""); // Limpiar el estado de edición de la descripción
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditInput("");
    setDescriptionInput("");
  };

  const handleDescriptionInputChange = (value) => {
    // Nueva función para manejar el cambio de la descripción
    setDescriptionInput(value);
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
    descriptionInput,
    createTask,
    deleteTask,
    toggleComplete,
    handleEdit,
    saveEdit,
    cancelEdit,
    handleTaskInputChange,
    handleDescriptionInputChange,
    handleEditInputChange,
  };
};

export default useTaskList;
