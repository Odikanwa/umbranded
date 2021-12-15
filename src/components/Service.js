import React from 'react'
import styled from 'styled-components'
import Card4 from '../img/Card4.png'
import Carousel from './Carousel'


const Container = styled.div`
    margin-top: 0vw;
    display: flex;
    height: max-content;
    @media only screen and (max-width: 480px){
        flex-direction: column;
    }
`;

const Left = styled.div`
    width: 50%;
    @media only screen and (max-width: 480px){
        width: 100%;
        display: none;
    }
`;

const Image = styled.img`
    width: 90%;
    height: 90%;
    padding-top: 10px;
    margin-left: 100px;
    @media only screen and (max-width: 480px){
        margin-left: 30px;
        padding-top: 1px;
    }
`;

const Right = styled.div`
    width: 50%;
    @media only screen and (max-width: 480px){
       width: 100%;
    }
`;

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 480px){
        padding: 10% 20px 10px 20px;
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
    color: #555;
    @media only screen and (max-width: 480px){
        color: #1a1a1a;
        font-size: 16px;
    }
    
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
    
    
`;

const Button = styled.button`
    width: 180px;
    border: none;
    border-radius: 10px;
    background-color: #800080;
    color: white;
    font-size: 20px;
    padding: 15px;
    margin-top: 30px;
    cursor: pointer;
    @media only screen and (max-width: 480px){
        padding: 9px;
        margin-top: 5%;
        margin-bottom: 10%;
        }
`;

// const Modal = styled.div`
//     width: 100vw;
//     height: 100vh;
//     position: absolute;
//     top: 0;
//     left: 0;
//     background-color: rgba(0, 0, 0, 0.5);
// `;

const Service = (props) => {
    // const [open, setOpen] = useState(false);
    // const smallScreen = window.screen.width <= 480 ? true : false;
    return (
        <Container>
            <Left><Image src={Card4}/></Left>
            <Right>
                <Wrapper>
                    <Title>Need a Business Card?</Title>
                    <Desc> You can't begin to imagine the number of clients you 've lost because of your Socrates-era
                        card.
                    </Desc>
                    <Desc> Alright. Enough of the taunting. Here we go. Now haze out
                        a CEO-looking you ending a see-you-later handshake with Elon the Tesla, and slipping something, say
                        a card, through. You want that card to carry the best impression it can manage. It has to sell 
                        your brand as quickly as ever; something even your high-priced suit coudn't score. Now ink it.
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

export default Service;
