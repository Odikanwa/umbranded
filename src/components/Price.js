import React from 'react'
import styled from 'styled-components'
import PriceCard from './PriceCard';
import {MediaQueries} from './MediaQueries'

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 767px){
    height: auto;
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 10px;
     }
     ${MediaQueries('tablet_min', 'tablet_max')`s
     margin-left: 5%;
    `}
    @media only screen and (min-width: 767px) and (max-width: 1100px) {
        height: auto;
        margin: 10% 4% 10% 5%;
    }
`;

const Price = () => {

    return (
        <Container>
            <PriceCard price='10' type='Basic' customNumber='100' discount='5%'/>
            <PriceCard price='20' type='Premium' customNumber='250' discount='10%'/>
            <PriceCard price='30' type='Advanced' customNumber='500+' discount='15%'/>
        </Container>
    )
}

export default Price
