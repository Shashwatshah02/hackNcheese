import { useState } from "react";
import {
  Input,
  Flex,
  Button,
  Box
} from "@chakra-ui/react";
import Forum_Card from "./Forum_Card";
import { useNavigate } from 'react-router-dom'

const Forum_page = () => {
  const [text, setText] = useState("");
  const [mode, setMode] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setText(e.target.value);
    console.log(text)
  };
  const handleClick = () => {
    setMode(<Forum_Card value={text} />)
  };

  return (
    <div className="container" style={{ padding: "20px" }}>
      <Box align='center'>
      <a
                href="https://forum.sublimetext.com"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "#00000",
                  fontSize: "22px",
                }}
              >
                Community Forum
              </a>
              </Box>
      <Box>
      <Button
          bgColor="black"
          height="50px"
          color="white"
          _hover={{ bgColor: "gray.700" }} // Change color on hover
          onClick={() => navigate('/chat')}
          float={'right'}
        >
          Chat with friend
        </Button>
        </Box>
      <table style={{ backgroundColor: "#ffffff", width: "100%" }}>
        <tbody>
          <tr>
            <td
              align="center"
              style={{
                textAlign: "center",
                padding: "20px 0",
                fontFamily: "Helvetica, Arial, sans-serif",
              }}
            >
              
            </td>
          </tr>
        </tbody>
      </table>


      <Flex
        direction={["column", "column", "row"]}
        alignItems="center"
        justifyContent="center"
        style={{ paddingBottom: "20px" }}
      >
        <Input
          placeholder="Share your thoughts"
          width={["100%", "80%", "700px"]}
          height="50px"
          mb={["15px", "20px", "0"]}
          value={text}
          onChange={handleInputChange}
          // onBlur={handleSubmit} // Trigger submit on blur (you can use a button click event instead)
        />
        <Button
          bgColor="black"
          height="50px"
          width={["100%", "20%", "100px"]}
          color="white"
          ml={["0", "0", "20px"]}
          _hover={{ bgColor: "gray.700" }} // Change color on hover
          onClick={handleClick}
        >
          POST
        </Button>
      </Flex>
      <div>{mode}</div>
    </div>
  );
};

export default Forum_page;
