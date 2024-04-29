import "./App.css";
import { Flex } from "@chakra-ui/react";
import { Header } from "./components/Header";

function App() {
  return (
    <Flex direction="column" align="center" justify="center">
      <Header />
    </Flex>
  );
}

export default App;
