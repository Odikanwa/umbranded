import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { FooterShapeCrimson } from '../components/Home';
import { FooterShapeBlack } from '../components/Home';
import PageBanner from '../components/PageBanner';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
`;

const Wrapper = styled.div`
    height: auto;
    overflow: hidden;
    position: relative;
`;


const Logo = () => {
    
    return (
        <Container>
        <Navbar/>
        <Wrapper>
        <PageBanner/>
        </Wrapper>
        <Wrapper>
        <Footer/>
        <FooterShapeCrimson/>
        <FooterShapeBlack/>
        </Wrapper>
        </Container>
    )
}

export default Logo;
