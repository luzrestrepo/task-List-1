import TodoForm from "./TodoForm";
import { TaskList } from "./TaskList";
import { Box, Heading } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box justifyContent="center" textAlign="center" marginBottom="4">
      <Heading as="h2" size="xl" color="blue.500" paddingBottom="3">
        Task List
      </Heading>
      <TodoForm />
      <TaskList />
    </Box>
  );
};
