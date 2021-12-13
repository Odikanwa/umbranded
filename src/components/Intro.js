import React from 'react'
import styled from 'styled-components'
import Splash4 from '../img/Splash4.png'
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px;

    @media only screen and (max-width: 480px){
        flex-direction: column;
    }
`;
const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px){
        width: 100%;
        height: 100%;
    }
`;

const Title = styled.h1`
    width: 60%;
    font-size: 60px;
    color: white;
    @media only screen and (max-width: 480px){
        width: 100%;
        font-size: 45px;
    }
`;

const Unfamiliar = styled.span`
   color: #00cc00;
`;

const Desc = styled.p`
    width: 60%;
    font-size: 20px; 
    margin-top: 20px;
    color: #e6e6e6;
    @media only screen and (max-width: 480px){
        width: 100%;
        color: black;
    }
`;

const Info = styled.div`
    width: 60%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 480px){
        width: 100%;
        flex-direction: column;
    }
`;

const Button = styled.button`
    padding: 15px;
    background-color:  #800080;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;
    @media only screen and (max-width: 480px){
        margin-bottom: 30px;
    }
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
`;

const Phone = styled.span`
    color: #ff99ff;
    font-weight: bold;
    @media only screen and (max-width: 480px){
        color: #990099;
    }
`;

const ContactText = styled.span`
    color: #ff80ff;
    margin-top: 5px;
    @media only screen and (max-width: 480px){
        color: #ff1aff;
    }
`;

const Right = styled.div`
    height: 40%;
    @media only screen and (max-width: 480px){
        display: none;
    }
`;

const Image = styled.img`
    width: 100%;
`;

const Intro = () => {
    return (
        <Container>
            <Left>
                <Title>Xplore the <Unfamiliar>unfamiliar</Unfamiliar></Title>
                <Desc> We believe that audaciously umsplashing one's biased imagination is key to
                    uniquely umbranding one in the growing sea of creatives. Soit Originale!
                </Desc>
                <Info>
                    <Button>START A DESIGN</Button>
                    <Contact>
                        <Phone> Call us (234) 811 233 0000</Phone>
                        <ContactText>For any enquiry or aid</ContactText>
                    </Contact>
                </Info>
            </Left>
            <Right><Image src={Splash4}/></Right>
            <AnimatedShapes/>
        </Container>
    );
}

export default Intro;
