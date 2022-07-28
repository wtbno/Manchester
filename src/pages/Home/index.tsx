import React, { useRef, Component } from "react";
import { ReactDOM } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AwesomeSlider from "react-awesome-slider";

import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";



import {
  Box,
  Text,
  Image,
  Container,

  Link,
} from "@chakra-ui/react";
import NavBar from "../../components/NavBar";

//Slider

const AutoplaySlider = withAutoplay(AwesomeSlider);
const Home = () => {
  const imgStyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    maxHeight: "90vh",
  };
  const listInnerRef = useRef();

  const basicBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxSize: "250px",
    color: "white",
    textShadow: "0 0 20px black",
    fontWeight: "bold",
    fontSize: "20px",
    px: 4,
    background: "src(queijos3.png) center/cover no-repeat",
  };
  return (
    <>
     <NavBar/>

      <Box
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        width={"100%"}
      >
        <AutoplaySlider play={true} cancelOnInteraction={false} interval={6000}>
          <div data-src="box1.png" />
          <div data-src="boxqueijos.png" />
          <div data-src="queijos.jpg" />
          <div data-src="ypanema.jpg" />
          <div data-src="allcheese.png" />
          <div data-src="campoLargo.jpg" />
          <div data-src="estrada.jpg" />
          <div>
            <img src="queijo3.jpg" />
          </div>
        </AutoplaySlider>
      </Box>
      

      <Box
        // border={"5px solid #0a7a00"}
        marginTop="10px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        //height="100px"
      >
        <Image
          boxShadow="0 -1px 8px 1px rgba(0,0,0,0.5)"
          src="/factory.png"
          maxWidth="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        />
      </Box>
      <Box
        // border={"5px solid #0a7a00"}
        marginTop="10px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        //height="100px"
      >
        <Image
          boxShadow="0 -1px 8px 1px rgba(0,0,0,0.5)"
          src="/estradaf.png"
          maxWidth="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        />
      </Box>
      <Box
        // border={"5px solid #0a7a00"}
        marginTop="10px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        //height="100px"
      >
        <Image
          boxShadow="0 -1px 8px 1px rgba(0,0,0,0.5)"
          src="/anyway.png"
          maxWidth="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        />
      </Box>
      <Box
        // border={"5px solid #0a7a00"}
        marginTop="10px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        //height="100px"
      >
        <Image
          boxShadow="0 -1px 8px 1px rgba(0,0,0,0.5)"
          src="/anyway.png"
          maxWidth="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        />
      </Box>
      <Box
        // border={"5px solid #0a7a00"}
        marginTop="10px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        //height="100px"
      >
        <Image
          boxShadow="0 -1px 8px 1px rgba(0,0,0,0.5)"
          src="/anyway.png"
          maxWidth="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        />
      </Box>
      <Box
        // border={"5px solid #0a7a00"}
        marginTop="10px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        //height="100px"
      >
        <Image
          boxShadow="0 -1px 8px 1px rgba(0,0,0,0.5)"
          src="/anyway.png"
          maxWidth="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        />
      </Box>
      </>
  );
};

export default Home;
