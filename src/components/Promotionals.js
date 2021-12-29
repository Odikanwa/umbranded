import React from 'react'
import styled from 'styled-components'
import promotionalImg from '../img/promotional.png'
import { MediaQueries } from './MediaQueries';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    margin-left: 5%;
    margin-right: 4%;
    @media only screen and (max-width: 767px){
        height: auto;
        flex-direction: column-reverse;
    }
    @media only screen and (min-width: 768px) and (max-width: 1100px){
        height: auto;
    }
    
`;

const Left = styled.div`
    width: 45%;
    @media only screen and (max-width: 767px){
        width: 100%;
    }
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    ${MediaQueries('mobileS_min', 'mobileS_max')`
        padding: 20px;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
        padding: 20px;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
        padding: 20px;
    `}
    ${MediaQueries('tablet_min', 'tablet_max')`
        padding: 30px 10px 30px 0px;
    `}
`;

const Title = styled.h1`
${MediaQueries('mobileS_min', 'mobileS_max')`
    font-size: 20px;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
    font-size: 25px;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
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
    width: 55%;
    ${MediaQueries('mobileS_min', 'mobileS_max')`
        width: 100%;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
    width: 100%;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
    width: 100%;
    `}
`;

const Image = styled.img`
    width: 100%;
    height: 90%;
    padding-top: 10px;
    margin-right: 50px;
    ${MediaQueries('mobileM_min', 'mobileM_max')`
    height: 90%;
    width: 100%;
    margin-top: 20px;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
    height: 90%;
    width: 100%;
    margin-top: 20px;
    `}
    ${MediaQueries('tablet_min', 'tablet_max')`
    width: 100%;
    height: 70%;
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
        padding: 14px 20px;
        margin-top: 6%;
    `}
`;

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
