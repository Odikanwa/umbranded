import React from 'react'
import styled from 'styled-components'
import { MediaQueries } from './MediaQueries';

const Container = styled.div`
    height: 50px;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;

const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.div`
    font-size: 30px; 
    font-weight: bold;
    z-index: 99;
    ${MediaQueries('mobileS_min', 'mobileS_max')`
    font-size: 15px;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
    font-size: 18px;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
    font-size: 22px;
    `}
    ${MediaQueries('tablet_min', 'tablet_max')`
    font-size: 27px;
    `}
`;

const Umb = styled.span`
    color:   #3333cc;
    text-decoration: underline dotted;
    text-underline-offset: 2px;
`;

const Randed = styled.span`
    color: #ffff00;;
    text-decoration: underline;
    text-underline-offset: 2px;
`;


const Menu = styled.ul`
    display: flex;
    list-style: none;
    z-index: 99;
    
    ${MediaQueries('mobileS_min', 'mobileS_max')`
    display: none;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
    display: none;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
    display: none;
    `}
`;
const MenuItemWhite = styled.li`
    margin-right: 35px;
    font-size: 18px;
    font-weight: bold;
    color: white;
    &:hover{
        text-decoration: underline;
        text-underline-offset: 3px;
    }
`;

const MenuItemCrimson = styled.li`
    margin-right: 35px;
    font-size: 18px;
    font-weight: bold;
    color: crimson;
    &:hover{
        text-decoration: underline;
        text-underline-offset: 3px;
    }
`;

const Button = styled.button`
    border: none;
    padding: 10px 15px;
    background-color: crimson;
    color: white;
    font: white;
    font-weight: bold;
    border-radius: 10px;
    letter-spacing: 2px;
    cursor: pointer;

    ${MediaQueries('mobileS_min', 'mobileS_max')`
    font-size: 12px;
    padding: 5px;
    
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
    font-size: 14px;
    padding: 6px;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
    font-size: 1em;
    padding: 9px;
    `}
    ${MediaQueries('tablet_min', 'desktop')`
    display: none;
    `}
`;
const Navbar = (props) => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo><Umb>Umb</Umb><Randed>randed</Randed></Logo>
                    <Menu>
                        <MenuItemWhite>Home</MenuItemWhite>
                        <MenuItemWhite>features</MenuItemWhite>
                        <MenuItemWhite>Services</MenuItemWhite>
                        <MenuItemCrimson>Pricing</MenuItemCrimson>
                        <MenuItemCrimson>Contact</MenuItemCrimson>
                    </Menu>
                </Left>
                <Button>Menu</Button>
            </Wrapper>
        </Container>
    );
}

export default Navbar;
//Button: border; 2px solid white;
// @media only screen and (min-width: 480px) and (max-width: 750px) {
//     color: green;
// }
// @media only screen and (max-width: 480px){
//     color:  #ff471a;
// }