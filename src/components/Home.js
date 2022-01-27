import React, { useRef } from 'react';
import styled, { css } from "styled-components";
import Logo from "./Logo";
import Intro from "./Intro";
import Navbar from "./Navbar";
import BusinessCard from "./BusinessCard";
import Price from "./Price";
import Contact from "./Contact";
import Footer from "./Footer";
import Flyer from "./Flyer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Promotionals from "./Promotionals";


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
    @media only screen and (max-width: 1100px){
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

export const FooterShapeCrimson = styled.div`
    ${Shape}
    position: absolute;
    clip-path: polygon(0 0, 40% 0, 40% 100%, 0% 100%);
    background-color: crimson;
    @media only screen and (max-width: 480px){
      clip-path: polygon(0 0, 50% 0, 50% 100%, 0% 100%);
   }
`;

export const FooterShapeBlack = styled.div`
    ${Shape}
    position: absolute;
    clip-path: polygon(40% 0, 100% 0%, 100% 100%, 40% 100%);
    background-color: black;
    @media only screen and (max-width: 480px){
      clip-path: polygon(50% 0, 100% 0%, 100% 100%, 50% 100%);
   }
`;
//export const NavContext = createContext();

const Home = () => {

  
    //const [menuOpen, setMenuOpen] = useState(true);


    const appRef = useRef();
    const introRef = useRef();
    

    // useEffect(() => {

    //   if(menuOpen === true){
    //     introRef.current.style.filter = 'brightness(100%)';
    //     appRef.current.style.filter = 'brightness(100%)';
    //   }else {
    //     introRef.current.style.filter = 'brightness(30%)';
    //     appRef.current.style.filter = 'brightness(30%)';
    //   }
    // }
    // );

  return ( 
    <>
    <Container>
      <Navbar/>
      <Container ref={introRef}>
      <Intro />
      <IntoShapeBlack />
      <IntoShapeCrimson />
      </Container>
      </Container>
      
    <Container ref={appRef}>
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
    </Container>
    </>
      
  )
};
//
//clip-path: circle(26.4% at 27% 53%);
export default Home;

