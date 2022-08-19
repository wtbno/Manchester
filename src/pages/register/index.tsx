import React, { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Image,
  Button,
  Toast,
  useToast,
} from "@chakra-ui/react";
import { CircularProgress } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { InputRightElement } from "@chakra-ui/react";

import { cpfMask } from "../../components/Helpers/CpfMask";

const Login = () => {
  const [cpfClient, setCpfClient] = useState();
  const [isLoading, setIsLoading] = useState();
  const [password, setPassword] = useState();
  const [clientName, setClientName] = useState();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const handleForms = () => {
    if (clientName || password || cpfClient === "") return console.error("");
  };

  return (
    <>
      <Box
        h={"100vh"}
        border={"solid 1px red"}
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
      >
        <Box
          border={"solid 1px #4e1717"}
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          w={"40%"}
          h={"80vh"}
          boxShadow={"0 -1px 8px 1px rgba(0,0,0,0.2)"}
        >
          <FormControl
            flexDirection={"column"}
            justifyContent={"space-evenly"}
            display={"flex"}
            alignItems={"center"}
            w={"90%"}
            h={"90%"}
          >
            <FormLabel>Novo usuário</FormLabel>
            <Image
              boxShadow={"0 -1px 8px 1px rgba(0,0,0,0.2)"}
              borderRadius={"10px"}
              w={"40%"}
              src="./redwine.ico"
            />
            <Input
              boxShadow={"0 -1px 8px 1px rgba(0,0,0,0.2)"}
              placeholder="Nome completo"
              type="text"
            />
            <Input
              boxShadow={"0 -1px 8px 1px rgba(0,0,0,0.2)"}
              placeholder="CPF"
            />
            <Input
              boxShadow={"0 -1px 8px 1px rgba(0,0,0,0.2)"}
              placeholder="E-mail"
              type="email"
            />

            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>

            <Button variant={"ghost"} colorScheme="red">
              <a href="/Login">Salvar</a>
            </Button>

            <FormHelperText></FormHelperText>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default Login;
