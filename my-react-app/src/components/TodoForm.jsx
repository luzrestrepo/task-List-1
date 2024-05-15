import { Button, Flex, Input } from "@chakra-ui/react";
import useTaskList from "./hooks/UseTaskList";

const TodoForm = () => {
  const { taskInput, handleTaskInputChange, createTask } = useTaskList();

  const addTask = (e) => {
    e.preventDefault();
    createTask(taskInput);
  };

  return (
    <form onSubmit={addTask}>
      <Flex gap="4" marginBottom="4" justifyContent="center">
        <Input
          type="text"
          value={taskInput}
          onChange={(e) => handleTaskInputChange(e.target.value)}
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
