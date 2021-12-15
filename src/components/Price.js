import React from 'react'
import styled from 'styled-components'
import PriceCard from './PriceCard';

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px){
    flex-direction: column;
    padding-top: 5px;
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
