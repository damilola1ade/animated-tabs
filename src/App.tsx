import { Center, Flex } from "@chakra-ui/react";
import { Tabs } from "./components/Tabs";

function App() {
  return (
    <Center>
      <Flex maxW={{ base: "1024px", "2xl": "1320px" }} p={{ base: 4, lg: 0 }}>
        <Tabs />
      </Flex>
    </Center>
  );
}

export default App;
