import React from 'react'
import styled from 'styled-components'

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
    font-size: 35px; 
    font-weight: bold;
    @media only screen and (max-width: 480px){
        font-size: 25px;
    }
`;

const Umb = styled.span`
    color:   #3333cc;
    text-decoration: underline dotted;
    text-underline-offset: 2px;
`;

const Ran = styled.span`
    color: #ffff00;
    text-decoration: underline;
    text-underline-offset: 2px;
    @media only screen and (max-width: 480px){
        color:  #ff471a;
    }
`;

const Ded = styled.span`
    color: 	 #ffff00;
    text-decoration: underline;
    text-underline-offset: 2px;
    @media only screen and (max-width: 480px){
        color:  #ff471a;
    }
`;

const Menu = styled.ul`
    display: flex;
    list-style: none;

    @media only screen and (max-width: 480px){
        display: none;
    }
`;
const MenuItemWhite = styled.li`
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    &:hover{
        text-decoration: underline;
        text-underline-offset: 2px;
    }
`;

const MenuItemCrimson = styled.li`
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
    color: crimson;
    &:hover{
        text-decoration: underline;
        text-underline-offset: 2px;
    }
`;

const Button = styled.button`
    border: 2px solid white;
    padding: 10px 15px;
    background-color: crimson;
    color: white;
    font: white;
    font-weight: bold;
    border-radius: 10px;
    letter-spacing: 2px;
    cursor: pointer;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo><Umb>Umb</Umb><Ran>ran</Ran><Ded>ded</Ded></Logo>
                    <Menu>
                        <MenuItemWhite>Home</MenuItemWhite>
                        <MenuItemWhite>features</MenuItemWhite>
                        <MenuItemWhite>Services</MenuItemWhite>
                        <MenuItemCrimson>Pricing</MenuItemCrimson>
                        <MenuItemCrimson>Contact</MenuItemCrimson>
                    </Menu>
                </Left>
                <Button>JOIN TODAY</Button>
            </Wrapper>
        </Container>
    );
}

export default Navbar;
