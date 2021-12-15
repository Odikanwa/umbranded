import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import globe from '../img/globe.png'
import meta from '../img/meta.png'
import instagram from '../img/instagram.png'
import twitter from '../img/twitter.png'

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column; 
    @media only screen and (max-width: 480px){
        flex-direction: column;
     }
`;

const Wrapper1 = styled.div`
    height: 93%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px){
        flex-wrap: wrap;
        align-items: stretch;
     }
`;

const Wrapper2 = styled.div`
    height: 7%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: black; 
    @media only screen and (max-width: 480px){
        flex-direction: column;
     }
`;


const Column = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    flex-direction: column; 
    @media only screen and (max-width: 480px){
        width: 48%;

     }
    
`;

const Column2 = styled.div`
    width: 33%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px){
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
        margin: 8px 0px;
        font-size: 14px;
     } 
`;

const Header = styled.span`
    color: white;
    font-size: 24px;
    font-weight: bold;
    @media only screen and (max-width: 480px){
        font-size: 20px;
     }
`;

const Icons = styled.img`
    width: 20px;
    margin-right: 5px;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
`;


const Footer = () => {

    const footerIconsRef = useRef ();
    const langRef = useRef();
    const handlesRef = useRef();

    useEffect(() =>{
        if (window.screen.width <= 480){
            footerIconsRef.current.style.display = "none";
            langRef.current.style.display = "none";
        }
        if (window.screen.width > 480){
            handlesRef.current.style.display = "none";
        }
    })
    
    return (
        <Container>
        <Wrapper1>
            <Column>
               <List>
                   <ListItem><Header>Xplore</Header></ListItem>
                   <ListItem>Logos</ListItem>
                   <ListItem>Business Cards</ListItem>
                   <ListItem>Promotionals</ListItem>
                   <ListItem>Posters</ListItem>
                   <ListItem>Flyers</ListItem>
               </List>
            </Column>
            <Column>
               <List>
                   <ListItem><Header>Orders</Header></ListItem>
                   <ListItem>Liked Items</ListItem>
                   <ListItem>Place Order</ListItem>
                   <ListItem>Check Orders</ListItem>
                   <ListItem>Cancel Orders</ListItem>
                   <ListItem>Return Parcel</ListItem>
               </List>
            </Column>
            <Column>
               <List>
                   <ListItem><Header>Learn</Header></ListItem>
                   <ListItem>Color Arts</ListItem>
                   <ListItem>Design Elements</ListItem>
                   <ListItem>Image Editing</ListItem>
                   <ListItem>Web branding</ListItem>
                   <ListItem>Templates</ListItem>
               </List>
            </Column>
            <Column>
               <List>
                   <ListItem><Header>Resources</Header></ListItem>
                   <ListItem>Color Wheel</ListItem>
                   <ListItem>Palette Generator</ListItem>
                   <ListItem>Font Blend</ListItem>
                   <ListItem>Icon Maker</ListItem>
                   <ListItem>Text Styler</ListItem>
               </List>
            </Column>
            <Column>
               <List>
                   <ListItem><Header>Support</Header></ListItem>
                   <ListItem>About</ListItem>
                   <ListItem>Engage Us</ListItem>
                   <ListItem>Community</ListItem>
                   <ListItem>Privacy Policy</ListItem>
                   <ListItem>Terms of Service</ListItem>
               </List>
            </Column>
            <Column ref={handlesRef}>
               <List>
                   <ListItem><Header>Handles</Header></ListItem>
                   <ListItem><Icons src={meta}/> Meta</ListItem>
                   <ListItem><Icons src={instagram}/> Instagram</ListItem>
                   <ListItem><Icons src={twitter}/>Twitter</ListItem>
               </List>
            </Column>
        </Wrapper1>
        <Wrapper2>
            <Column2>
            <List>
                <ListItem ref={langRef}><Icons src={globe}/>English (US)</ListItem>
            </List>
            </Column2>
            <Column2>
            <List>
                <ListItem> &copy; 2021, All rights reserved, Umbranded</ListItem>
            </List>
            </Column2>
            <Column2>
            <List>
                <ListItem ref={footerIconsRef}><Icons src={meta}/>Meta   <Icons src={instagram}/>Instagram   <Icons src={twitter}/>Twitter</ListItem>
            </List>
            </Column2>
        </Wrapper2>
        </Container>
    )
}

export default Footer

//Footer Content

//Xplore -- Logo , Business Card, Posters, Flyers --
//Promotionals -- Place Order, Check Orders, Cancel Orders, Return Parcel
//Learn -- Color Arts, Design Elements, Templates, Photo Editing, Website branding
//Resources -- Color wheel, Palette generator, Font blend, Icon maker, Text Styler,
//Support --- About, Community, Privacy policy, Terms of Service 

//Smaller Footer
//GlobeIcon, English (US) -------(C)2021, All rights reserved, Umbranded -----Icons

// Personal Protection Items(Umbrella, maks, outwear), Stress Balls, Tote Bags, Pens, Water bottles/Drinkware
     // Coffee Mugs, Koozies, T-shirts, Mobile Accessories(usb, chargers), Keychains, desk accessories
//To achieve height alignment for wrapper 1:
// flex-direction: wow
// align-items: left;
// justify-content: space-between;`;