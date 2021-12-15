import React from 'react'
import styled from 'styled-components'
import promotionalImg from '../img/promotional.png'

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 480px){
        flex-direction: column;
    }
`;

const Left = styled.div`
    width: 45%;
    @media only screen and (max-width: 480px){
        width: 100%;
    }
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 480px){
        padding: 20px;
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
    @media only screen and (max-width: 480px){
        font-size: 16px;
    }
`;

const Right = styled.div`
    width: 55%;
    @media only screen and (max-width: 480px){
        display: none;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 90%;
    padding-top: 10px;
    margin-right: 50px;
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
        padding: 8px;
    }
`

const Promotionals = () => {
    return (
        <Container>
            <Left>
                <Wrapper>
                    <Title>Time for some Promotionals!</Title>
                    <Desc>
                        Gifts, they say, scores 10X more brand promotional points than the media! Reason being that
                        they are very real, feelable and useful to the person.
                    </Desc>

                    <Desc>Nah...You don't just pick any item. Time, trends and seasons are your biggest assets.
                        The goal is to get a positive public feel towards your brand; without coming across as a
                        money bunny or insensitive. Do indulge us in our explicit galore of personal protection items
                        (umbrella, masks, outwear), stress balls, tote bags, pens, water bottles, coffee mugs, koozies, 
                        T-shirts, mobile accessories, Keychains, desk accessories and many more!
                    </Desc>
                    <Button>Make a Choice</Button>
                </Wrapper>
            </Left>
            <Right><Image src={promotionalImg}/></Right>
        </Container>
    )
}

export default Promotionals;
