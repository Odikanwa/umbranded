import React from 'react'
import styled from 'styled-components'
import HeroImage from '../img/heroImg.png'
import AnimatedShapes from './AnimatedShapes';
import { MediaQueries } from './MediaQueries';

const Container = styled.div`
    height: 100vh;
    display: flex;
    padding: 20px 20px 0px 20px;

    @media only screen and (max-width: 900px) and (orientation: landscape){
        height: auto;
        flex-direction: column;
        padding-bottom: 20px;
    }
`;
const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 767px){
        width: 100%;
        height: 100%;
    }
`;

const Title = styled.h1`
    width: 60%;
    font-size: 60px;
    color: white;
    z-index: 99;
    ${MediaQueries('mobileS_min', 'mobileS_max')`
        width: 70%;
        font-size: 25px;
        margin-right: 35%; 
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
        width: 70%;
        font-size: 35px;
        margin-right: 30%;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
    width: 70%;
    font-size: 45px;
    margin-right: 30%;
    `}
    ${MediaQueries('tablet_min', 'tablet_max')`
    width: 70%;
    font-size: 60px;
    margin-left: 10%;
    `}
    @media only screen and (min-width: 1024px) and (max-width: 1100px){
    width: 70%;
    }
    @media only screen and (max-width: 800px) and (orientation: landscape){
        width: 45%;
        margin-top: 20px;
        margin-right: 55%;
        font-size: 35px;
    }
    @media only screen and (min-width: 801px) and (max-width: 900px) and (orientation: landscape){
        width: 50%;
        margin-top: 40px;
        margin-right: 40%;
        font-size: 40px;
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
    z-index: 99;
    ${MediaQueries('mobileS_min', 'mobileS_max')`
    width: 65%;
    font-size: 15px;
    margin-right: 40% 
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
    width: 75%;
    font-size: 1em;
    margin-right: 25%;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
    width: 65%;
    font-size: 18px;
    margin-right: 35%
    `}
    ${MediaQueries('tablet_min', 'tablet_max')`
    width: 70%;
    font-size: 18px;
    margin-left: 10%
    `}
    @media only screen and (min-width: 1024px) and (max-width: 1100px){
        width: 70%;
        margin-left: 
        }
        @media only screen and (max-width: 800px) and (orientation: landscape){
            width: 45%;
            margin-right: 55%;
        }
        @media only screen and (min-width: 801px) and (max-width: 900px) and (orientation: landscape){
            width: 50%;
            margin-right: 40%;
        }
    
`;

const Info = styled.div`
    width: 60%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 767px){
        width: 100%;
        flex-direction: column;
    }
`;

const Button = styled.button`
    background-color:  #800080;
    color: white;
    border-radius: 20px;
    font-size: 1em;
    font-weight: bold;
    padding: 15px 25px;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;
    z-index: 99;
    ${MediaQueries('mobileS_min', 'mobileS_max')`
        font-size: 12px;
        margin-bottom: 30px;
        padding: 9px;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
        font-size: 14px;
        margin-bottom: 30px;
        padding: 12px 18px;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
        font-size: 18px;
        margin-bottom: 30px;
        padding: 15px 25px;
    `}
    ${MediaQueries('tablet_min', 'tablet_max')`
        font-size: 20px;
        padding: 15px 28px;
    `}
    @media only screen and (min-width: 1024px) and (max-width: 1100px){
        font-size: 20px;
        padding: 15px 35px; 
        }
`;

const Right = styled.div`
    @media only screen and (max-width: 1100px){
        display: none; 
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const Intro = () => {
    return (
        <Container>
            <Left>
                <Title>Xplore the <Unfamiliar>unfamiliar</Unfamiliar></Title>
                <Desc> We believe that a vicious umsplashing of one's biased imagination is the key to
                    umbranding one in the growing sea of creatives. Soit originale!
                </Desc>
                <Info>
                    <Button>START A DESIGN</Button>  
                </Info>
            </Left>
            <Right><Image src={HeroImage}/></Right>
            <AnimatedShapes/>
        </Container>
    );
}

export default Intro;
//height: calc(100vh - 50px);
