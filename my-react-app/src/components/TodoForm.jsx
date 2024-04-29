import React, { useState } from "react";
import { Button, Flex, Input } from "@chakra-ui/react";

const TodoForm = ({ tasks, setTasks }) => {
  const [taskInput, setTaskInput] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (taskInput.trim()) {
      setTasks([...tasks, { text: taskInput, isCompleted: false }]);
      setTaskInput("");
    }
  };

  return (
    <form onSubmit={addTask}>
      <Flex gap="4" marginBottom="4" justifyContent="center">
        <Input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter task..."
        />
        <Button colorScheme="green" size="sx" type="submit">
          Add task
        </Button>
      </Flex>
    </form>
  );
};

export default TodoForm;
