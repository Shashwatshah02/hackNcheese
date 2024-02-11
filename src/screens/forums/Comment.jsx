import React, { useState } from "react";
import {
  Input,
  Flex,
  Button
} from "@chakra-ui/react";

export default function Comment() {
  return (
    <Flex
      direction={["column", "column", "row"]}
      alignItems="center"
      justifyContent="center"
    >
      <Input
        placeholder="Enter comments here"
        width={["100%", "80%", "200px"]}
        height="50px"
        mb={["15px", "20px", "0"]}
        onChange={(e)=>e.target.value}
        // value={email}
        // onChange={handleInputChange}
        // onBlur={handleSubmit} // Trigger submit on blur (you can use a button click event instead)
      />
      <Button
        bgColor="black"
        height="50px"
        width={["100%", "20%", "100px"]}
        color="white"
        ml={["0", "0", "20px"]}
        _hover={{ bgColor: "gray.700" }} // Change color on hover
      >
        POST
      </Button>
    </Flex>
  );
}
