import { Button, Flex, Input } from "@chakra-ui/react";
import useTaskList from "./hooks/UseTaskList";
import { useState } from "react";

const TodoForm = () => {
  const {
    taskInput,
    descriptionInput,
    handleTaskInputChange,
    handleDescriptionInputChange,
    createTask,
  } = useTaskList();
  const [error, setError] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (taskInput.length < 3) {
      setError("The task name must be at least 3 characters.");
      return;
    }
    setError("");
    createTask();
  };

  return (
    <form onSubmit={addTask}>
      <Flex direction="column" gap="4" marginBottom="4">
        <Input
          type="text"
          value={taskInput}
          onChange={(e) => handleTaskInputChange(e.target.value)}
          placeholder="Enter task name..."
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Flex gap="3" justifyContent="end">
          <Input
            value={descriptionInput}
            onChange={(e) => handleDescriptionInputChange(e.target.value)}
            placeholder="Enter task description "
          />
        </Flex>
        <Button colorScheme="green" size="sm" type="submit">
          Add task
        </Button>
      </Flex>
    </form>
  );
};

export default TodoForm;
