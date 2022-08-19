import React from "react";
import { Box, Image, Link } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box
      //border={"2px solid #d607ff"}
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      //maxW={"100%"}
      width="100%"
      height="15vh"
      borderBottom="1px solid #9B2813"
      backgroundColor={"#4e1717"}
    >
      <Image w={"100px"} h={"100px"} src="./tranparent.png" />
      <Box
        w={"100%"}
        //border={"2px solid #0734ff"}
        display={"flex"}
        justifyContent={"space-evenly"}
      >
        <Link href="/home" fontWeight={"bold"} color={"#FFF"}>
          INÍCIO
        </Link>
        <Link href="#aboutUs" fontWeight={"bold"} color={"#FFF"}>
          SOBRE
        </Link>
        <Link href="#pessoas" fontWeight={"bold"} color={"#FFF"}>
          PESSOAS
        </Link>
        <Link fontWeight={"bold"} color={"#FFF"}>
          CONTATO
        </Link>
        <Link href="/pedidos" fontWeight={"bold"} color={"#FFF"}>
          PEDIDOS
        </Link>
      </Box>
    </Box>
  );
};

export default NavBar;
