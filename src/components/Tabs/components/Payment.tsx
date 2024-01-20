import { useRef } from "react";
import { useInView } from "framer-motion";

import { Box, Divider, Flex, Image, Spacer, Tag, Text } from "@chakra-ui/react";
import metamask from "../../../assets/metamask.png";
import { LearnMore } from "../../Buttons/LearnMore";

const TagItems = ["Crypto exchanges", "Neobanks", "Self-custody wallets"];

export const Payment = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <Box
      ref={ref}
      textColor="black"
      style={{
        transform: isInView ? "none" : "translateY(10px)",
        opacity: isInView ? 1 : 0,
        filter: isInView ? "blur(0)" : "blur(5px)", 
        transition: "all 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.2s",
      }}
    >
      <Flex flexDirection={{ base: "column", lg: "row" }} alignItems="center">
        <Box textAlign="start">
          <Text
            fontSize={{ sm: "md", md: "xl", "2xl": "3xl" }}
            fontWeight="bold"
          >
            Metamask
          </Text>
          <Text
            w={{ base: "105%", lg: "60%" }}
            mt={8}
            fontSize={{ sm: "sm", md: "lg", "2xl": "2xl" }}
          >
            Boost your revenue and reduce dropout rates at the checkout by
            allowing your users to make simple and secure payments directly from
            their wallets.
          </Text>
          <Divider p={4} w="60%" borderColor="black" />
          <Text
            mt={4}
            fontSize={{ sm: "sm", md: "md", "2xl": "2xl" }}
            fontWeight="bold"
          >
            Industries
          </Text>

          <Box w={{ base: "100%", lg: "90%" }}>
            {TagItems.map((tag, index) => (
              <Tag
                fontSize={{ sm: "sm", md: "sm", "2xl": "xl" }}
                p={1.5}
                ml={1}
                mt={2}
                key={index}
                bg="purple"
                textColor="white"
              >
                {tag}
              </Tag>
            ))}
          </Box>

          <LearnMore/>
        </Box>

        <Spacer />

        <Box mt={{ base: 8, lg: 0 }}>
          <Image
            src={metamask}
            loading="lazy"
            alt="blue card"
            w={{ base: "250px", md: "lg" }}
          />
        </Box>
      </Flex>
    </Box>
  );
};
