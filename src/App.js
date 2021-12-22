import styled, { css } from "styled-components";
import Logo from "./components/Logo";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import BusinessCard from "./components/BusinessCard";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Flyer from "./components/Flyer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Promotionals from "./components/Promotionals";

const Container = styled.div`
    height: auto;
    overflow: hidden;
    position: relative;
`;

const Shape = css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

const IntoShapeBlack = styled.div`
    ${Shape}
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    background-color: black;
    z-index: -1;
    @media only screen and (max-width: 480px){
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      
  }
`;

const IntoShapeCrimson = styled.div`
    ${Shape}
    clip-path: circle(42.4% at 15% 40%);
    background-color: crimson !important;
    z-index: 10;
    @media only screen and (max-width: 767px){
      clip-path: circle(52% at 4% 52%);
      
  }
`;

const ServiceShape = styled.div`
    ${Shape}
    position: absolute;
    clip-path: polygon(0 0, 33% 0, 33% 100%, 0% 100%);
    background-color: #eb2d53;
`;

const FlyerShape = styled.div`
    ${Shape}
    position: absolute;
    clip-path: polygon(0 0, 33% 0, 33% 100%, 0% 100%);
    background-color: #eb2d53;
`;

const PriceShape = styled.div`
    ${Shape}
    position: absolute;
    clip-path: polygon(67% 0, 100% 0, 100% 35%, 100% 70%, 100% 100%, 67% 100%, 0 100%, 68% 91%, 67% 9%, 0 0);
    background-color: crimson;
`;

const FooterShapeCrimson = styled.div`
    ${Shape}
    position: absolute;
    clip-path: polygon(0 0, 40% 0, 40% 100%, 0% 100%);
    background-color: crimson;
    @media only screen and (max-width: 480px){
      clip-path: polygon(0 0, 50% 0, 50% 100%, 0% 100%);
   }
`;

const FooterShapeBlack = styled.div`
    ${Shape}
    position: absolute;
    clip-path: polygon(40% 0, 100% 0%, 100% 100%, 40% 100%);
    background-color: black;
    @media only screen and (max-width: 480px){
      clip-path: polygon(50% 0, 100% 0%, 100% 100%, 50% 100%);
   }
`;

function App() {

  //const smallScreen = window.screen.height <= 480 ? true : false;
  return (
    
    <>
    <Container>
      <Navbar/>
      <Intro/>
      <IntoShapeBlack/>
      <IntoShapeCrimson/>
    </Container>
    <Container>
      <Logo/>
    </Container> 
    <Container>
      <BusinessCard/>
      <ServiceShape/>
    </Container>
    <Container>
      <Promotionals/>
    </Container>
    <Container>
      <Flyer/>
      <FlyerShape/>
    </Container>
    <Container>
      <Price/>
      <PriceShape/>
    </Container>
    <Container>
      <Contact/>
    </Container>
    <Container>
      <Footer/>
      <FooterShapeCrimson/>
      <FooterShapeBlack/>
    </Container>
    </>
      
  )
};
//
//clip-path: circle(26.4% at 27% 53%);
export default App;
