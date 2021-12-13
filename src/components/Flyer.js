import React from 'react'
import styled from 'styled-components'
import flyer from '../img/flyer5.jpg'

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 480px){
        flex-direction: column;
    }
`;

const Left = styled.div`
    width: 50%;
    @media only screen and (max-width: 480px){
        width: 90%;
        height: 30%;
    }
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 480px){
        padding: 10px 20px 20px 20px;
    }
`;

const Title = styled.h1`
@media only screen and (max-width: 480px){
    font-size: 25px;
 }
`;

const Desc = styled.p`
    font-size: 20px;
    margin-top: 20px;
    color: #1a1a1a;
    justify-content: justify;
`;

const Right = styled.div`
    width: 50%;
    @media only screen and (max-width: 480px){
        width: 100%;
    }
`;

const Image = styled.img`
    width: 80%;
    height: 80%;
    padding-top: 10px;
    margin-left: 100px;
    margin-top: 10%;
    @media only screen and (max-width: 480px){
        margin-top: 5%;
        margin-left: 50px;
    }
`;

const Button = styled.button`
    width: 180px;
    border: none;
    border-radius: 10px;
    background-color: #800080;
    color: white;
    font-size: 20px;
    padding: 15px;
    margin-top: 40px;
    cursor: pointer;
    @media only screen and (max-width: 480px){
        margin-top: 5%;
    }
`;

const Flyer = () => {
    return (
        <Container>
            <Left><Image src={flyer}/></Left>
            <Right>
            <Wrapper>
                    <Title>Let's Fly the Word!</Title>
                    <Desc>
                        Flyers are nowhere close to being gone. They just moved neighborhoods. You are right,
                        nobody accepts flyers on the street anymore, except the street is not online. Got you.
                    </Desc>

                    <Desc>Just the neccessary details, the bold ones, the colorful. Do not bore. Do not 
                        explain. Go for the eyeballs, stay on track,  treat them to beauty and guide them to
                        action. Do not forget to stick your brand to it! 
                    </Desc>
                    <Desc>
                        Here, treat yourself to our collections of designs for inspirations. Could always make
                        a custom one for you.
                    </Desc>
                    <Button>Explore All</Button>
                </Wrapper>
            </Right>
        </Container>
    )
}


export default Flyer;
