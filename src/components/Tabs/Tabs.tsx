import { useState, useEffect } from "react";
import {
  Box,
  Tabs as ChakraTabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Progress,
  Circle,
  Text,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  CryptoLending,
  DeFi,
  Payment,
  PersonalFinance,
  Tax,
} from "./components";
import { TypingText } from "../CustomText/CustomText";
import { motion } from "framer-motion";

export const Tabs = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [progressValue, setProgressValue] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const intervalDuration = 15000; // 10 seconds

  const selectedTabStyle = {
    bg: "white",
    color: "black",
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        // Switch to the next tab after the interval
        setSelectedTabIndex((prevIndex) => {
          // Check if it's the last tab, then reset to the first tab
          if (prevIndex === 4) {
            return 0;
          } else {
            return prevIndex + 1;
          }
        });
      }
    }, intervalDuration);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [isHovered]);

  // Update progress value based on selectedTabIndex and isHovered
  useEffect(() => {
    setProgressValue(0); // Reset progress value
    const progressIntervalId = setInterval(() => {
      if (!isHovered) {
        setProgressValue((prevValue) => (prevValue + 1) % 101); // Increment progress value from 0 to 100
      }
    }, intervalDuration / 100); // Adjust interval for smooth progress animation

    return () => clearInterval(progressIntervalId); // Cleanup the progress interval on tab change
  }, [selectedTabIndex, intervalDuration, isHovered]);

  return (
    <Box
      mt={8}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <Heading
          w={{ base: "100%", lg: "76%", "2xl": "70%" }}
          size={{ sm: "xl", md: "2xl" }}
          fontWeight="medium"
          letterSpacing={-1}
        >
          <TypingText title="Animated tabs" />
        </Heading>
      </motion.div>

      <Box
        mt={6}
        mb={8}
        p={{ sm: 4, md: 8 }}
        bgGradient="linear(to right, #fce7df 30%, #beebff)"
        borderRadius="xl"
        boxShadow="2xl"
      >
        <ChakraTabs
          variant="soft-rounded"
          index={selectedTabIndex}
          onChange={(index) => setSelectedTabIndex(index)}
          
        >
          <TabList justifyContent="space-around">
            <SimpleGrid mt={6} p={2} columns={[3, null, 5]} spacing={{ base: 2, md: 12 }}>
              {selectedTabIndex == 0 ? (
                <Tab as={Box} bg="whiteAlpha.500" _selected={selectedTabStyle}>
                  <Stack spacing={2} direction="row">
                    <Circle bg="purple" size="7px" mt={2} />
                    <Text>Metamask</Text>
                  </Stack>
                </Tab>
              ) : (
                <Tab bg="whiteAlpha.500">Metamask</Tab>
              )}
              {selectedTabIndex == 1 ? (
                <Tab as={Box} bg="whiteAlpha.500" _selected={selectedTabStyle}>
                  <Stack spacing={2} direction="row">
                    <Circle bg="green" size="7px" mt={2} />
                    <Text>Arrow</Text>
                  </Stack>
                </Tab>
              ) : (
                <Tab bg="whiteAlpha.500">Arrow</Tab>
              )}
              {selectedTabIndex == 2 ? (
                <Tab as={Box} bg="whiteAlpha.500" _selected={selectedTabStyle}>
                  <Stack spacing={2} direction="row">
                    <Circle bg="orange" size="7px" mt={2} />
                    <Text>Coinbase</Text>
                  </Stack>
                </Tab>
              ) : (
                <Tab bg="whiteAlpha.500">Coinbase</Tab>
              )}
              {selectedTabIndex == 3 ? (
                <Tab as={Box} bg="whiteAlpha.500" _selected={selectedTabStyle}>
                  <Stack spacing={2} direction="row">
                    <Circle bg="green" size="7px" mt={2} />
                    <Text>Bybit</Text>
                  </Stack>
                </Tab>
              ) : (
                <Tab bg="whiteAlpha.500">Bybit</Tab>
              )}
              {selectedTabIndex == 4 ? (
                <Tab as={Box} bg="whiteAlpha.500" _selected={selectedTabStyle}>
                  <Stack spacing={2} direction="row">
                    <Circle bg="#1da1f2" size="7px" mt={2} />
                    <Text>GreenSmile</Text>
                  </Stack>
                </Tab>
              ) : (
                <Tab bg="whiteAlpha.500">GreenSmile</Tab>
              )}
            </SimpleGrid>
          </TabList>
          {selectedTabIndex == 0 && (
            <Progress
              value={progressValue}
              colorScheme="purple"
              h="2px"
              mt={6}
            />
          )}
          {selectedTabIndex == 1 && (
            <Progress
              value={progressValue}
              colorScheme="twitter"
              h="2px"
              mt={6}
            />
          )}
          {selectedTabIndex == 2 && (
            <Progress
              value={progressValue}
              colorScheme="orange"
              h="2px"
              mt={6}
            />
          )}
          {selectedTabIndex == 3 && (
            <Progress
              value={progressValue}
              colorScheme="green"
              h="2px"
              mt={6}
            />
          )}
          {selectedTabIndex == 4 && (
            <Progress
              value={progressValue}
              colorScheme="twitter"
              h="2px"
              mt={6}
            />
          )}
          <TabPanels mt={12}>
            <TabPanel>
              <Payment />
            </TabPanel>

            <TabPanel>
              <PersonalFinance />
            </TabPanel>

            <TabPanel>
              <CryptoLending />
            </TabPanel>

            <TabPanel>
              <DeFi />
            </TabPanel>

            <TabPanel>
              <Tax />
            </TabPanel>
          </TabPanels>
        </ChakraTabs>
      </Box>
    </Box>
  );
};
