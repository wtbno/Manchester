import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Image,
  Button,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const Login = () => {
  return (
    <Box
      h={"100vh"}
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
          h={"80%"}
        >
          <FormLabel>Entrar</FormLabel>

          <Image
            boxShadow={"0 -1px 8px 5px rgba(0,0,0,0.2)"}
            borderRadius={"10px"}
            w={"30%"}
            src="./redwine.ico"
          />
          <Text>Por gentileza preencha todos os campos abaixo</Text>
          <Input
            boxShadow={"0 -1px 8px 5px rgba(0,0,0,0.2)"}
            placeholder="E-mail"
            type="email"
          />
          <Input
            boxShadow={"0 -1px 8px 5px rgba(0,0,0,0.2)"}
            placeholder="Senha"
            type="password"
          />

          <Button
            boxShadow={"0 -1px 8px 5px rgba(0,0,0,0.2)"}
            variant={"ghost"}
            colorScheme="red"
          >
            Entrar
          </Button>

          <FormHelperText>
            Não possuí cadastro? Cadastra-se <Link href="/Register">aqui</Link>
          </FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Login;
