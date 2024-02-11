import React, { useState } from "react";
import {
  Flex,
  Box,
  VStack,
  Heading,
  Text,
  Divider,
  IconButton,
  useDisclosure,
  Input,
  Avatar,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import SideBar from "./Elements/SideBar";
import Calendar from "@ericz1803/react-google-calendar";
import Nav from "./Elements/Nav";

const Upcoming_Events = () => {
  //   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const [response, setResponse] = useState([]);
  const API_KEY = "AIzaSyBWct3-uW-9XBR2rWx3mqmt64-8xpHeHTI";
  let calendars = [
    { calendarId: "https://calendar.google.com/calendar/embed?src=shashwatshah02%40gmail.com&ctz=Asia%2FKolkata" },
    {
      calendarId: "YOUR_CALENDAR_ID_2",
      color: "#B241D1", //optional, specify color of calendar 2 events
    },
  ];
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://spit-hackthn.vercel.app/get-user-data/deepgohil",
    headers: {
      accept: "application/json",
    },
  };

  axios
    .request(config)
    .then((response) => {
      setResponse(response.data);
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
        <SideBar name={response.username} />
      </Box>

      {/* Content */}
      <Box ml="250px" p="4" flex="1" overflowY="auto">
        {/* Navbar */}
        <Nav />

        {/* Main Content */}
        <VStack spacing="4" mt="60px">
          <Heading size="lg">Welcome {response.username}</Heading>
          {/* Add your dashboard content here */}
          <Box bg="gray.100" w="100%" p="2%" height={"80vh"}>
            <Calendar apiKey={API_KEY} calendars={calendars} />
            <a target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=N3FqcjQ1OWpsNWl1dWlzM2ZxOGNiOGY4NGwgZ2F1cmliNDlAbQ&amp;tmsrc=gaurib49%40gmail.com"><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en-GB.gif"/></a>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Upcoming_Events;
