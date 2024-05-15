import {
  Flex,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Input,
} from "@chakra-ui/react";
import { MdOutlineDelete } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import useTaskList from "./hooks/UseTaskList";

export const TaskList = () => {
  const {
    tasks,
    editingId,
    editInput,
    deleteTask,
    toggleComplete,
    handleEdit,
    saveEdit,
    cancelEdit,
    handleEditInputChange,
  } = useTaskList();

  return (
    <Flex direction="column" align="center">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Status</Th>
            <Th>Task</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tasks.map((task, index) => (
            <Tr key={index}>
              <Td>
                <Box onClick={() => toggleComplete(index)}>
                  {task.isCompleted ? (
                    <BsCheckCircleFill color="green" />
                  ) : (
                    <BsCheckCircleFill color="gray" />
                  )}
                </Box>
              </Td>
              <Td>
                {editingId === index ? (
                  <Input
                    value={editInput}
                    onChange={(e) => handleEditInputChange(e.target.value)}
                  />
                ) : (
                  <Box
                    style={{
                      textDecoration: task.isCompleted
                        ? "line-through"
                        : "none",
                    }}
                    onClick={() => handleEdit(index)}
                  >
                    {task.text}
                  </Box>
                )}
              </Td>
              <Td>
                <Flex justify="space-between" alignItems="center">
                  {editingId === index ? (
                    <>
                      <Button
                        colorScheme="blue"
                        size="sm"
                        onClick={() => saveEdit(index)}
                        marginRight="2"
                      >
                        Save
                      </Button>
                      <Button colorScheme="red" size="sm" onClick={cancelEdit}>
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      <Box onClick={() => handleEdit(index)}>
                        <FaUserEdit color="green" />
                      </Box>
                      <Box onClick={() => deleteTask(index)}>
                        <MdOutlineDelete color="red" />
                      </Box>
                    </>
                  )}
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  );
};
