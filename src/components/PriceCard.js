import React from 'react'
import styled from 'styled-components'
import { MediaQueries } from './MediaQueries';

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
    ${MediaQueries('mobileS_min', 'mobileS_max')`
        height: max-content;
        margin-right: 0; 
        margin-bottom: 10px;
        padding: 10px;
     `}
     ${MediaQueries('mobileM_min', 'mobileM_max')`
        height: max-content;
        margin-right: 0; 
        margin-bottom: 10px;
        padding: 10px;
     `}
     ${MediaQueries('mobileL_min', 'mobileL_max')`
        height: max-content;
        margin-right: 0; 
        margin-bottom: 10px;
        padding: 10px;
     `}
     ${MediaQueries('tablet_min', 'tablet_max')`
     height: max-content;
     margin-right: 10px;
     margin-bottom: 10px;
     padding: 10px;
    `}
`;

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Price = styled.span`
    font-weight: bold;
    font-size: 50px;
    ${MediaQueries('mobileS_min', 'mobileS_max')`
        font-size: 30px;
     `}
     ${MediaQueries('mobileM_min', 'mobileM_max')`
        font-size: 30px;
     `}
     ${MediaQueries('mobileL_min', 'mobileL_max')`
        font-size: 34px;
     `}
`;

const Type = styled.button`
    padding: 10px;
    margin: 10px 0px;
    font-size: 1em;
    border: 2px solid crimson;
    color: crimson;
    font-weight: bold;
    background-color: white;
    border-radius: 20px;
    ${MediaQueries('mobileS_min', 'mobileS_max')`
        font-size: 14px;
        margin: 5px;
        padding: 7px;
        border: none;
        border: 1px solid crimson;
     `}
     ${MediaQueries('mobileM_min', 'mobileM_max')`
        font-size: 14px
        margin-top: 7px;
        padding: 10px;
     `}
     ${MediaQueries('mobileL_min', 'mobileL_max')`
        font-size: 15px;
        margin-top: 10px;
        padding: 8px;
     `}
`;

const List = styled.ul`
    list-style: none;

`;

const ListItem = styled.li`
    margin: 30px 0px;
     ${MediaQueries('mobileS_min', 'mobileS_max')`
        margin: 16px 5px 16px 0px;
        font-size: 14px;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
        margin: 19px 8px 19px 0px;
        font-size: 15px;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
        margin: 22px 10px 22px 0px;
        font-size: 1em;
    `}
`;

const Button = styled.button`
    border: none;
    background-color: #800080;
    color: white;
    font-size: 15px;
    padding: 12px 18px;
    border-radius: 20px;
    ${MediaQueries('mobileS_min', 'mobileS_max')`
        font-size: 14px;
        padding: 8px 12px;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
        font-size: 15px;
        padding: 8px 12px;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
        font-size: 1em;
        padding: 12px 15px;
    `}
`;

const PriceCard = ({price, type, customNumber, discount}) => {

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
                <Button>Join Now</Button>
        </Container>
    )
}

export default PriceCard;
