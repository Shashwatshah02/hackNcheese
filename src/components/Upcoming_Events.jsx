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
            {/* <Calendar apiKey={API_KEY} calendars={calendars} />
            <a target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=N3FqcjQ1OWpsNWl1dWlzM2ZxOGNiOGY4NGwgZ2F1cmliNDlAbQ&amp;tmsrc=gaurib49%40gmail.com"><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en-GB.gif"/></a> */}
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&bgcolor=%23ffffff&src=c2hhc2h3YXRzaGFoMDJAZ21haWwuY29t&src=MDlmYWVlMzk1MzEwZTJmZjczNTlhODM2YTEwZTYwNGM1NjRjNmJhMTcyNzRkMjA3YWIzYmVjN2JjMzNiOTQzM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTAyODQ2ODM2OTE5NzcxODM5OTQyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTE4NDIwODEwOTYzNTQxMTQ5MjE5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTE3NjAzNjA3MjE3OTk1MjcxODI3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTE1Mzc4NDgyMDM3NzA5Mzc4MTMzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4tZ2IuaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTE1NzUzOTUyNDc2NTk0NjA2MDAyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Z2F1cmliNDlAZ21haWwuY29t&src=Y2xhc3Nyb29tMTAzMjM1Mjk1OTg0Nzk0OTk0NzA3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%23D81B60&color=%230047a8&color=%230047a8&color=%23c26401&color=%23202124&color=%230B8043&color=%23c26401&color=%23E4C441&color=%23137333" style={{border:"solid 1px #777", width:"100%", height:"70vh", frameborder:"0", scrolling:"no"}}></iframe>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Upcoming_Events;
