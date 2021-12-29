import React from 'react'
import styled from 'styled-components'
import globe from '../img/globe.png'
import meta from '../img/meta.png'
import instagram from '../img/instagram.png'
import twitter from '../img/twitter.png'

const Container = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column; 
`;

const Wrapper2 = styled.div`
    height: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: black;
    flex-direction: column; 
    @media only screen and (max-width: 480px){
        flex-direction: column;
        height: 30%;
     }
`;

const Column2 = styled.div`
    width: 33%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-direction: column; @media only screen and (max-width: 480px){
        flex-direction: column;
        width: 100%;
     }

`;

const List = styled.ul`
    color: #e6e6e6;
    list-style: none;
`;

const ListItem = styled.div`
    margin: 20px 0px;
    flex-direction: column;
    @media only screen and (max-width: 480px){
        margin: 15px 0px;
     } 
`;

const Icons = styled.img`
    width: 20px;
    margin-right: 5px;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
`;

const Footer2 = () => {
    return (
        <Container>
            <Wrapper2>
            <Column2>
            <List>
                <ListItem><Icons src={globe}/>English (US)</ListItem>
            </List>
            </Column2>
            <Column2>
            <List>
                <ListItem> &copy; 2021, All rights reserved, Umbranded</ListItem>
            </List>
            </Column2>
            <Column2>
            <List>
                <ListItem><Icons src={meta}/>Meta   <Icons src={instagram}/>Instagram   <Icons src={twitter}/>Twitter</ListItem>
            </List>
            </Column2>
        </Wrapper2>
        </Container>
    )
}

export default Footer2;
