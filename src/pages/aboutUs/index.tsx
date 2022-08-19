import React from "react";
import {
  Box,
  Text,
  Image,
  Container,
  Stack,
  ChakraProvider,
  Heading,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import theme from "../../components/Theme";

const AboutUs = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box
        backgroundColor="#f8f8f8"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        //height="100vh"
        flexDirection="column"
        border="solid 5px #ff0000"
      >
        <Image
          marginTop="150px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="300px"
          src="/manchesterLogo.jpeg"
          borderRadius="50px"
        />
        <Heading
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontSize="5xl"
        >
          A queijaria manchester
        </Heading>
        <Text
          marginTop="50px"
          width="50%"
          maxW='80%'
          height="50vh"
          border="solid 1px #55f"
          textAlign="justify"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          Sempre estamos contando histórias por aqui. É nossa natureza. Somos
          uma fábrica de histórias contadas em forma de alimentos. E que desafio
          é fazer isso. Temos a infinita responsabilidade de contar para você as
          histótias que envolvem o nosso povo, nossa cultura, costumes, raízes,
          conhecimento, antepassados... tudo que foi importante para chegarmos
          até aqui. Já contamos as histórias do Campo Largo da Estrada de Ferro
          de Ypanema do que aconteceu em 1858
        </Text>
      </Box>
    </ChakraProvider>
  );
};

export default AboutUs;
