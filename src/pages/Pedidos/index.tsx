import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";

const Pedidos = () => {
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="100vh"
      w="100%"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="4" bg="orange.300" area={"header"}>
        Header
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={"nav"}>
        Nav
      </GridItem>
      <Grid
        justifyContent="center"
        display="flex"
        alignItems="center"
        templateColumns="repeat(5, 1fr)"
        gap={10}
      >
        <GridItem w="100%" h="50vh" bg="blue.500" />
        <GridItem w="100%" h="50vh" bg="blue.500" />
        <GridItem w="100%" h="50vh" bg="blue.500" />
        <GridItem w="100%" h="50vh" bg="blue.500" />
        <GridItem w="100%" h="50vh" bg="blue.500" />
      </Grid>
      
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
};

export default Pedidos;
