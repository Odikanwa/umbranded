import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { FooterShapeCrimson } from '../components/Home';
import { FooterShapeBlack } from '../components/Home';
import PageBanner from '../components/PageBanner';

const Container = styled.div`
    height: auto;
    overflow: hidden;
    position: relative;
`;


const Wrapper = styled.div`
    height: auto;
    overflow: hidden;
    position: relative;
`;



const Promotionals = () => {
    
    return (
        <Container>
        <Navbar/>
        <PageBanner/>
        <Wrapper>
        <Footer/>
        <FooterShapeCrimson/>
        <FooterShapeBlack/>
        </Wrapper>
        </Container>
    )
}

export default Promotionals;
