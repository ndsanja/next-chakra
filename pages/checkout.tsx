import { NextPage } from "next";
import { Container, Flex, VStack } from "@chakra-ui/react";

const checkout: NextPage = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20}>
        <VStack
          h="full"
          w="full"
          spacing={10}
          p={10}
          alignItems="flex-start"
        ></VStack>
        <VStack
          h="full"
          w="full"
          spacing={10}
          p={10}
          alignItems="flex-start"
          bg="gray.50"
        ></VStack>
      </Flex>
    </Container>
  );
};

export default checkout;
