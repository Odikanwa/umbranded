import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-right: 50px; 
    padding: 20px;
    box-shadow: 0px 1px 11px 1px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 1px 11px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 1px 11px 1px rgba(0,0,0,0.75);
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    @media only screen and (max-width: 480px){
        height: max-content;
        margin-right: 0; 
        margin-bottom: 10px;
        padding: 10px;
     }
`;

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Price = styled.span`
    font-weight: bold;
    font-size: 50px;
    @media only screen and (max-width: 480px){
        font-size: 30px;
     }
`;

const Type = styled.button`
    padding: 10px;
    margin: 10px 0px;
    border: 2px solid crimson;
    color: crimson;
    font-weight: bold;
    background-color: white;
    border-radius: 20px;
    @media only screen and (max-width: 480px){
        display: none;
     }
`;

const List = styled.ul`
    list-style: none;

`;

const ListItem = styled.li`
    margin: 30px 0px;
    @media only screen and (max-width: 480px){
        margin: 10px;
        font-size: 12px;
     }
`;

const Button = styled.button`
    border: none;
    background-color: #800080;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 15px;
    border-radius: 10px;
    @media only screen and (max-width: 480px){
        font-size: 12px;
        padding: 10px;
     }
`;

const PriceCard = ({price, type, customNumber, discount}) => {

    const buttonRef = useState();

    useEffect(() => {
        if (window.screen.width <= 480){
            buttonRef.current.style.display = "none";
        }
    })

    return (
        <Container>
            <PriceContainer>
                $<Price>{price}</Price>/month
            </PriceContainer>
                <Type>{type} Plan</Type>
                <List>
                    <ListItem>{customNumber} Custom design templates</ListItem>
                    <ListItem>Exclusive Support</ListItem>
                    <ListItem>{discount} discount on bulk orders</ListItem>
                    <ListItem>Access to all resources</ListItem> {''}
                </List>
                <Button ref={buttonRef}>Join Now</Button>
        </Container>
    )
}

export default PriceCard
