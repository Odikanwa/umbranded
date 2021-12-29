import React from 'react'
import styled from 'styled-components'
import flyer from '../img/flyer5.jpg'
import {MediaQueries} from './MediaQueries'

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    margin-right: 4%;
    margin-left: 5%;
    @media only screen and (max-width: 767px){
        height: auto;
        flex-direction: column;
    }
    @media only screen and (min-width: 768px) and (max-width: 1100px){
        height: auto;
    }
`;

const Left = styled.div`
    width: 50%;
    ${MediaQueries('mobileS_min', 'mobileS_max')`
        width: 100%;
        height: 15em;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
    width: 100%;
    height: 30%;
`}
${MediaQueries('mobileL_min', 'mobileL_max')`
    width: 100%;
    height: 30%;
`}
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 767px){
        padding: 20px 20px 20px 20px;
    }
`;

const Title = styled.h1`
    ${MediaQueries('mobileS_min', 'mobileS_max')`
     font-size: 20px;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
        font-size: 25px;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
        font-size: 30px;
    `}
`;

const Desc = styled.p`
    font-size: 20px;
    margin-top: 20px;
    color: #1a1a1a;
    justify-content: justify;
    ${MediaQueries('mobileS_min', 'mobileS_max')`
        font-size: 15px;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
        font-size: 1em;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
        font-size: 1em;
    `}
`;

const Right = styled.div`
    width: 50%;
    @media only screen and (max-width: 767px){
        width: 100%;
    }
`;

const Image = styled.img`
    width: 70%;
    height: 70%;
    padding-top: 10px;
    margin-left: 50px;
    margin-top: 10%;

    ${MediaQueries('mobileS_min', 'mobileS_max')`
    height: 90%;
    width: 90%;
    margin-top: 3%;
    margin-left: 5%;  
    `}

    ${MediaQueries('mobileM_min', 'mobileM_max')`
    height: 15em;
    width: 90%;
    margin-top: 3%;
    margin-left: 20px; 
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
    height: 92%;
    width: 90%;
    margin-top: 3%;
    margin-left: 20px; 
    `}
    
    ${MediaQueries('tablet_min', 'tablet_max')`
    width: 90%;
    height: 45%;
    margin-top: 3%; 
    margin-left: 0px;
    margin-top: 20%;
    `}
`;

const Button = styled.button`
    width: 180px;
    border: none;
    border-radius: 20px;
    background-color: #800080;
    color: white;
    font-size: 20px;
    padding: 15px;
    margin-top: 40px;
    cursor: pointer;
    
    ${MediaQueries('mobileS_min', 'mobileS_max')`
    margin-top: 5%;
    font-size: 15px;
    padding: 7px;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
    font-size: 18px;
    padding: 8px 10px;
    margin-top: 5%;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
    font-size: 18px;
    padding: 14px 20px;
    margin-top: 5%;
    `}
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
