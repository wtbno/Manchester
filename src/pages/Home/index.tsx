import React, { useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { Box } from "@chakra-ui/react";
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
      <NavBar />

      <Box
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        width={"100%"}
      >
        <AutoplaySlider play={true} cancelOnInteraction={false} interval={6000}>
          <Box data-src="box1.png" />
          <Box data-src="boxqueijos.png" />
          <Box data-src="queijos.jpg" />
          <Box data-src="ypanema.jpg" />
          <Box data-src="allcheese.png" />
          <Box data-src="campoLargo.jpg" />
          <Box data-src="estrada.jpg" />
          <Box>
            <img src="queijo3.jpg" />
          </Box>
        </AutoplaySlider>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <AutoplaySlider>
          <Box id="aboutUs" data-src="history.png" />
          <Box data-src="factory.png" />
          <Box data-src="hist1958.png" />
        </AutoplaySlider>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <AutoplaySlider>
          <Box id="pessoas" data-src="human.png" />
          <Box data-src="respect.png" />
        </AutoplaySlider>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <AutoplaySlider>
          <Box id="nature" data-src="nature.png" />
          <Box data-src="motor.png" />
        </AutoplaySlider>
      </Box>
    </>
  );
};

export default Home;
