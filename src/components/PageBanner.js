import React from 'react'
import styled from 'styled-components'
import pageHeroImg from '../img/pageHeader.jpg'
import { MediaQueries } from './MediaQueries';

const Container =  styled.div`
height: 100vh;
width: 100vw;
overflow-x = hidden;
`;

const PageHero = styled.div`
background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${pageHeroImg});
background-size: cover;
background-position: top;
height: 100vh;
width: 100vw;
z-index: -1;
position: absolute;
top: 0;
left: 0;
`;

const Desc = styled.div`
height: 20vh;
width: 90vw;
margin-top: 35vh;
left: 0;
background-color: white;
margin-left: 4%;
margin-right: 5%;
border-radius: 10px;
filter: brightness(100%);
${MediaQueries('mobileS_min', 'mobileS_max')`
    height: 28vh;
    `}
    ${MediaQueries('mobileM_min', 'mobileL_max')`
    height: 22vh;
    `}
`;

const Text1 = styled.p`
color: black;
font-size: 1em;
padding: 20px 20% 5px 20%;
`;
const Text2 = styled.p`
color: black;
font-size: 1em;
padding: 10px 20% 1px 20%;
`;

const PageBanner = () => {
    return (
        <Container>
            <PageHero>
            <Desc>
                <Text1>Hi there!</Text1>
                <Text2>This page is still in development. Please check back back in a few days.</Text2>
            </Desc>
            </PageHero>
        </Container>
    )
}

export default PageBanner;
