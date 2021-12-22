import React from 'react'
import styled from 'styled-components'
import Splash4 from '../img/Splash4.png'
import AnimatedShapes from './AnimatedShapes';
import { MediaQueries } from './MediaQueries';

const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px 20px 0px 20px;

    @media only screen and (max-width: 767px){
        flex-direction: column;
        @media only screen and (orientation: landscape){
            height: auto;
        }
    }
    ${MediaQueries('mobileS_min', 'mobileS_max')`
    flex-direction: column;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
    flex-direction: column;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
    flex-direction: column;
    `}
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
    
    `}
    ${MediaQueries('laptop_min', 'laptop_max')`
    
    `}
    ${MediaQueries('laptopL_min', 'laptopL_max')`
    
    `}
    ${MediaQueries('desktop')`
    
    `}
    
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
    color: #e6e6e6;
    font-size: 15px;
    margin-right: 40% 
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
    width: 75%;
    color: #e6e6e6;
    font-size: 1em;
    margin-right: 25%;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
    width: 65%;
    color: #e6e6e6;
    font-size: 18px;
    margin-right: 35%
    `}
    ${MediaQueries('tablet_min', 'tablet_max')`
    
    `}
    ${MediaQueries('laptop_min', 'laptop_max')`
    
    `}
    ${MediaQueries('laptopL_min', 'laptopL_max')`
    
    `}
    ${MediaQueries('desktop')`
    
    `}
    
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
    padding: 15px;
    background-color:  #800080;
    color: white;
    border-radius: 20px;
    font-weight: bold;
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
`;

const Right = styled.div`
    height: 40%;
    @media only screen and (max-width: 767px){
        display: none; 
    }
    ${MediaQueries('mobileL_min', 'mobileL_max')`

    `}
`;

const Image = styled.img`
    width: 100%;
`;

const Intro = () => {
    return (
        <Container>
            <Left>
                <Title>Xplore the <Unfamiliar>unfamiliar</Unfamiliar></Title>
                <Desc> We believe that audaciously umsplashing one's biased imagination is the key to
                    uniquely umbranding one in the growing sea of creatives. Be original!
                </Desc>
                <Info>
                    <Button>START A DESIGN</Button>  
                </Info>
            </Left>
            <Right><Image src={Splash4}/></Right>
            <AnimatedShapes/>
        </Container>
    );
}

export default Intro;
//height: calc(100vh - 50px);
