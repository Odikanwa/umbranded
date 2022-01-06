import React from 'react'
import styled from 'styled-components'
import Card4 from '../img/Card4.png'
import Carousel from './Carousel'
import { MediaQueries } from './MediaQueries'


const Container = styled.div`
    height: 100vh;
    display: flex;
    padding-right: 4%;
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
    @media only screen and (max-width: 767px){
        width: 100%;
        display: none;
    }
`;

const Image = styled.img`
    width: 90%;
    height: 90%;
    padding-top: 10px;
    margin-left: 5%;

    ${MediaQueries('mobileS_min', 'mobileS_max')`
    margin-left: 30px;
    padding-top: 1px;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
    margin-left: 30px;
    padding-top: 1px;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
    margin-left: 30px;
    padding-top: 1px;
    `}
    ${MediaQueries('tablet_min', 'tablet_max')`
    margin-top: 20%;
    margin-left: 2%;
    height: 70%;
    `}
    
`;

const Right = styled.div`
    width: 50%;
    @media only screen and (max-width: 767px){
        width: 100%;
    }
`;

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 50px;
    ${MediaQueries('mobileS_min', 'mobileS_max')`
    font-size: 20px;
`}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
    font-size: 25px;
`}
${MediaQueries('mobileM_min', 'mobileM_max')`
    font-size: 30px;
`}
${MediaQueries('tablet_min', 'tablet_max')`
    font-size: 35px;
    `}
    ${MediaQueries('laptop_min', 'laptop_max')`
    font-size: 40px;
    `}
`;

const Desc = styled.p`
    font-size: 20px;
    margin-top: 20px;
    color: #555;
    ${MediaQueries('mobileS_min', 'mobileS_max')`
    color: #1a1a1a;
    font-size: 15px;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
    color: #1a1a1a;
    font-size: 1em;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
    color: #1a1a1a;
    font-size: 1em;
    `}
    
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
    ${MediaQueries('mobileS_min', 'mobileS_max')`
        margin-top: 10%;
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
    margin-top: 30px;
    cursor: pointer;
    ${MediaQueries('mobileS_min', 'mobileS_max')`
        font-size: 15px;
        padding: 7px;
        margin-top: 10%;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
        font-size: 18px;
        padding: 8px 10px;
        margin-top: 10%;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
        font-size: 18px;
        font-size: 18px;
        padding: 14px 20px;
    `}
`;

// const Modal = styled.div`
//     width: 100vw;
//     height: 100vh;
//     position: absolute;
//     top: 0;
//     left: 0;
//     background-color: rgba(0, 0, 0, 0.5);
// `;

const BusinessCard = (props) => {

    return (
        <Container>
            <Left><Image src={Card4}/></Left>
            <Right>
                <Wrapper>
                    <Title>Need a Business Card?</Title>
                    <Desc> You can't begin to imagine the number of clients you 've lost because of your bland looking-
                        card.
                    </Desc>
                    <Desc> Alright. Enough of the taunting. Here we go. Now haze out
                        a CEO-looking you ending a see-you-later handshake with Elon the Tesla, and slipping something, say
                        a card, through. You want that card to carry the best impression it can manage. It has to sell 
                        your brand as quickly as ever; something even your high-priced suit coudn't score. Now ink it.
                    </Desc>

                    <Desc>
                        You can check out our collection for inspiration.
                    </Desc>
                    <CardContainer>
                        <Carousel/>
                    </CardContainer>
                    <Button>Explore All</Button>
                </Wrapper>
            </Right>
        </Container>
    );
}

export default BusinessCard;
