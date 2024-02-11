import { useState } from 'react';
import { Flex, Box, VStack, Heading } from '@chakra-ui/react';
import IssueCards from '../Elements/IssueCards';
import axios from 'axios';
import SideBar from '../Elements/SideBar';
import Nav from '../Elements/Nav';
import Ai from '../Elements/Ai';


const AiDash = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const [response, setResponse] = useState([])


  let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://spit-hackthn.vercel.app/get-user-data/deepgohil',
      headers: { 
        'accept': 'application/json'
      }
    };
    
    axios.request(config)
    .then((response) => {
      setResponse((response.data));
    })
    .catch((error) => {
      console.log(error);
    });


  return (
    <Flex>
      {/* Sidebar */}
      <Box
        bg="gray.200"
        w="250px"
        h="100vh"
        position="fixed"
        top="0"
        left="0"
        overflowY="auto"
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      >
        {/* Sidebar Content */}
        <SideBar name={response.username}/>
      </Box>

      {/* Content */}
      <Box ml="250px" p="4" flex="1" overflowY="auto">
        {/* Navbar */}
        <Nav />

        {/* Main Content */}
        <VStack spacing="4" mt="60px">
        <Heading size="lg">Welcome {response.username}</Heading>
          {/* Add your dashboard content here */}
          <Box bg="gray.100" w="100%" p='2%' height='80vh'>
            <Ai />
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
};

export default AiDash;