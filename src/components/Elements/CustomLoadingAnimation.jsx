import React from 'react';
import { Box, Flex, Spinner, Text, VStack, HStack } from '@chakra-ui/react';
import TypingAnimation from './TypingAnimation';

const CustomLoadingAnimation = () => {
  return (
    <Flex direction="column" alignItems="center" justifyContent="center" height="60vh">
      <Box mb="4">
        <VStack spacing="4">
          <HStack spacing="4">
            <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="black" size="xl" />
            <Box w="10" h="10" bg="black" borderRadius="50%" />
          </HStack>
          <HStack spacing="4">
            <Box w="10" h="10" bg="black" borderRadius="50%" />
            <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="black" size="xl" />
          </HStack>
        </VStack>
      </Box>
      <TypingAnimation/>
    </Flex>
  );
};

export default CustomLoadingAnimation;
