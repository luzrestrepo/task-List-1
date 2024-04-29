import TodoForm from "./TodoForm";
import { TaskList } from "./TaskList";
import { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";

export const Header = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Función para actualizar las tareas y guardarlas en localStorage
  const updateTasks = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <Box justifyContent="center" textAlign="center" marginBottom="4">
      <Heading as="h2" size="xl" color="blue.500" paddingBottom="3">
        Task List
      </Heading>
      <TodoForm tasks={tasks} setTasks={updateTasks} />
      <TaskList tasks={tasks} setTasks={updateTasks} />
    </Box>
  );
};
