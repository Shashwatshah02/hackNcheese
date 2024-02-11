import { Flex, Box, VStack, Heading } from '@chakra-ui/react';
import { response } from '../../data/response'; 
import Profile from '../Profile';
import SideBar from '../Elements/SideBar';
import Nav from '../Elements/Nav';

const ProfileSection = () => {
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
        <SideBar name={response[0].username}/>
      </Box>

      {/* Content */}
      <Box ml="250px" p="4" flex="1" overflowY="auto">
        {/* Navbar */}
        <Nav />

<Flex mt='60px'>
  <Box p=' 2% 5%'>
  <Heading size="lg" >Hello {response[0].username}!!</Heading>
  </Box>
</Flex>
        {/* Main Content */}
        <VStack spacing="4" mt="10px">
          {/* Add your dashboard content here */}
          <Box bg="gray.100" w="100%" p='2%'>
          <Profile/>
          </Box>
          {/* Adjust the height and content of the box as needed */}
        </VStack>
      </Box>
    </Flex>
  );
};

export default ProfileSection;
