import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import CustomLoadingAnimation from '../Elements/CustomLoadingAnimation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Verify = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState([])
    const navigate = useNavigate()

    const handleInputChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleSubmit = async () => {
      setIsLoading(true); // Show loading animation
      try {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://spit-hackthn.vercel.app/get-user-data/deepgohil',
            headers: { 
              'accept': 'application/json'
            }
          };
          
          axios.request(config)
          .then((res) => {
            setResponse((res.data));
            navigate(`/issues/${email}`)
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Hide loading animation in case of error
      }
    };

  
  return (
    <Box align="center" mt={['10px', '30px', '50px']}>
      <marquee width="50%" direction="left" height="100px">
        <Text fontWeight="semibold" fontSize={['16px', '18px', '20px']}>
          👋🏽 Make sure to enter your correct username to verify it
        </Text>
      </marquee>
      {/* <Text mb='-10%'>Enter Username: </Text> */}
      <Flex direction={['column', 'column', 'row']} alignItems="center" justifyContent="center" mt={['20px', '50px', '100px']}>
        <Input
          placeholder="Enter your Username"
          width={['100%', '80%', '380px']}
          height="60px"
          mb={['15px', '20px', '0']}
          value={email}
          onChange={handleInputChange}
          onBlur={handleSubmit} // Trigger submit on blur (you can use a button click event instead)
        />
        <Button
          bgColor="black"
          height="60px"
          width={['100%', '20%', '100px']}
          color="white"
          ml={['0', '0', '20px']}
          _hover={{ bgColor: 'gray.700' }} // Change color on hover
        >
          Go
        </Button>
      </Flex>
      {isLoading && (
        <Box mt={['10px', '50px', '100px']}>
          <CustomLoadingAnimation />
        </Box>
      )}
    </Box>
  );
};

export default Verify;
