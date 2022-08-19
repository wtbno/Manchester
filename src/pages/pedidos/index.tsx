import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";

const Pedidos = () => {
  return (
    <>
      <NavBar />
      <Box
      w={"100%"}
        display={"flex"}
        alignItems={"center"}
        border={"solid 3px red"}
        h="100vh"
      ></Box>
    </>
  );
};

export default Pedidos;
