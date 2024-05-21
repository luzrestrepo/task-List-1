import "./App.css";
import { Flex } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { ToggleColorMode } from "./components/ToggleColorMode";

function App() {
  return (
    <ChakraProvider>
      <ToggleColorMode />
      <Flex direction="column" align="center" justify="center">
        <Header />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
