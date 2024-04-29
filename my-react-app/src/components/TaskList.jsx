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
import { useState } from "react";

export const TaskList = ({ tasks, setTasks }) => {
  const [editingId, setEditingId] = useState(null);
  const [editInput, setEditInput] = useState("");

  const deleteTodo = (id) => {
    const newAlls = [...tasks];
    newAlls.splice(id, 1);
    setTasks(newAlls);
  };
  const toggleComplete = (id) => {
    const newAlls = [...tasks];
    newAlls[id].completed = !newAlls[id].completed;
    setTasks(newAlls);
  };

  const handleEdit = (id) => {
    setEditingId(id);
    setEditInput(tasks[id].text);
  };

  const saveEdit = (id) => {
    const newAlls = [...tasks];
    newAlls[id].text = editInput;
    setTasks(newAlls);
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

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
          {tasks.map((all, index) => (
            <Tr key={index} className={all.completed ? "completed" : ""}>
              <Td>
                <Box onClick={() => toggleComplete(index)}>
                  {all.completed ? (
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
                    onChange={(e) => setEditInput(e.target.value)}
                  />
                ) : (
                  <Box
                    style={{
                      textDecoration: all.completed ? "line-through" : "none",
                    }}
                    onClick={() => handleEdit(index)}
                  >
                    {all.text}
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
                      <Box onClick={() => deleteTodo(index)}>
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
