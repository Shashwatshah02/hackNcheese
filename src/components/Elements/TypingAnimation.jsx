import React, { useState, useEffect } from 'react';
import { Flex, Text } from '@chakra-ui/react';

const TypingAnimation = () => {
  const [typedText, setTypedText] = useState('');
  const textToType = 'Building Collaborative Workspace...';

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (currentIndex <= textToType.length) {
          setTypedText(textToType.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setTypedText('');
            currentIndex = 0;
            startTyping(); // Restart typing animation
          }, 1000); // Delay before repeating the animation
        }
      }, 100); // Typing speed
    };

    startTyping();

    return () => clearInterval(typingInterval);
  }, []); // Run effect only once

  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Text fontSize="lg" fontWeight="bold">
        {typedText}
      </Text>
    </Flex>
  );
};

export default TypingAnimation;
