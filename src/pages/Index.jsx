import React, { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Box, IconButton, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [apiList, setApiList] = useState([]);
  const [apiInput, setApiInput] = useState("");
  const toast = useToast();

  const handleAddApi = () => {
    if (apiInput.trim() === "") {
      toast({
        title: "Error",
        description: "API URL cannot be empty.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setApiList([...apiList, apiInput]);
    setApiInput("");
  };

  const handleRemoveApi = (index) => {
    const newApiList = apiList.filter((_, i) => i !== index);
    setApiList(newApiList);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">API Dashboard</Text>
        <HStack width="100%">
          <Input placeholder="Enter API URL" value={apiInput} onChange={(e) => setApiInput(e.target.value)} />
          <IconButton aria-label="Add API" icon={<FaPlus />} onClick={handleAddApi} />
        </HStack>
        <VStack spacing={2} width="100%">
          {apiList.map((api, index) => (
            <HStack key={index} width="100%" justifyContent="space-between" p={2} borderWidth={1} borderRadius="md">
              <Text>{api}</Text>
              <IconButton aria-label="Remove API" icon={<FaTrash />} onClick={() => handleRemoveApi(index)} />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
