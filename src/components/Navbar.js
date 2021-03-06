import React, { useRef, useEffect, useState} from 'react';
import styled from 'styled-components'
import { NavLink} from 'react-router-dom'
import menuIcon from '../img/menu24.png'
import homeIcon from '../img/homeIcon.png'
import logoIcon from '../img/logoIcon.png'
import cardIcon from '../img/cardIcon.png'
import promoIcon from '../img/promoIcon.png'
import flyerIcon from '../img/flyerIcon.png'
import loginIcon from '../img/loginIcon.png';
import avatarIcon from '../img/avatarIcon.png';
import { MediaQueries } from './MediaQueries';

const Container = styled.div`
    height: 50px;
    width: 100vw;
    position: fixed;
    background-color: black;
    top: 0;
    left: 0;
    z-index: 2500;
    ${MediaQueries('tablet_min', 'desktop')`
    background-color: transparent;
    &:active{
        background-color: black;
    }
    `} 
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
    top: 10px;
    margin-left: 5%;
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
    ${MediaQueries('tablet_min', 'desktop')`
    margin-right: 5%;
    `}
`;

const Umb = styled.span`
    color:   #3333cc;
    text-decoration: underline dotted;
    text-underline-offset: 2px;
`;

const Randed = styled.span`
    color: #ffff00;
    text-decoration: underline;
    text-underline-offset: 2px;
`;


const Menu = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    list-style: none;
    z-index: 99;
    width: 100%;
    
    ${MediaQueries('mobileS_min', 'mobileL_max')`
    height: 100vh;
    width: 80vw;
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    right: 0;  
    display: none;
    background-color: white;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0px;
    margin-top: 0;
    z-index: 100;
    `}
`;

const Desc = styled.div`
    background-color: crimson;
    padding: 10% 10% 5% 10%;
    margin-bottom: 5%;
    ${MediaQueries('tablet_min', 'desktop')`
    display: none;
    `}
`;

const Avatar = styled.img`
    height: 100px;
`;
const Text1 = styled.p`
    font-size: 1em;
    color: #ffe6ff;
    margin-top: 10px;
`;
const Text2 = styled.p`
    font-size: 1em;
    color: #ffe6ff;
    margin-top: 5px;
`;

const MenuItem = styled.li`
    margin-right: 40px;
    font-size: 1em;
    color: #ffe6ff;
    cursor: pointer;
    &:hover, &.active {
        text-decoration: 1px underline;
        text-underline-offset: 3px;
    }
    ${MediaQueries('mobileS_min', 'mobileL_max')`
    color: black;
    width: 100%;
    padding: 5%;
    &:hover, &.active{
        text-decoration: none;
        color: crimson;
        background-color: #e6e6e6;
        font-weight: bold;
    }
    `}    
`;

const MenuLink = styled(NavLink)`
color: #ffe6ff;
text-decoration: none;
&.active{
    text-decoration: 3px underline;
    text-underline-offset: 3px;
}
${MediaQueries('mobileS_min', 'mobileL_max')`
    color: black;
    &:hover, &.active{
        text-decoration: none;
        color: crimson;
        font-weight: bold;
    }
    `}
`;

const MenuButton = styled.button`
    border: none;
    padding: 10px 15px;
    top: 10px;
    right: 4%;
    cursor: pointer;
    background-color: black;
    

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
const MenuIcon = styled.img``;
const MenuDropdownIcons = styled.img`
    margin-right: 30px;
    vertical-align: middle;
${MediaQueries('tablet_min', 'desktop')`
    display: none;
    `}
`;

const Navbar = () => {

//const value = useContext(NavContext);
// const context = useContext(NavContext);
// const {menuOpen, setMenuOpen} = context;

  const buttonRef = useRef();
  const menuRef = useRef();
  const navContainerRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    
    if(menuOpen === true){
        //value.blur();
        menuRef.current.style.display = 'block'
        buttonRef.current.style.display = 'none'   
              
    }else {
        //value.unBlur();
        menuRef.current.style.display = 'none' 
        buttonRef.current.style.display = 'inline-block'
    };
}

  //Custom hook for closing mobile nav dropdown menu on click ouside the menu
 const useOnClickOutside = (menuRef, handler) => {
      useEffect(() => {
          const listener = (event) => {
              //Do nothing if clicking ref's element or descendant elements    
              if(!menuRef.current || menuRef.current.contains(event.target)){
                  return;
              }else{
                //exit menu
                menuRef.current.style.display = 'none';
                buttonRef.current.style.display = 'inline-block';
              }
              //Keep menu fixed for tablet devices
              if (window.screen.width > 767){
                buttonRef.current.style.display = 'none';
                menuRef.current.style.display = 'inline-flex';
            };
              handler(event);
          };
          //document.addEventListener("mousedown", listener);
          document.addEventListener("touchstart", listener);
          return () => {
              //document.removeEventListener("mousedown", listener);
              document.removeEventListener("touchstart", listener);
          };     
      },
      [menuRef, handler]
      );
    }
  //call onclickOutside hook
  useOnClickOutside(menuRef, () => setMenuOpen(true));

  //custom hook for to change nav color on scroll
  //const useOnScroll = (navContainerRef, handler) => {
  useEffect(() => {
      const listener = (event) => {
        if(window.scrollY >= 50){
            navContainerRef.current.style.backgroundColor = 'black';
        }else{
            navContainerRef.current.style.backgroundColor = 'transparent';
        };
         
        //handler(event);
      };
      window.addEventListener('scroll', listener);
      return () =>{
          window.removeEventListener('scroll', listener)
      };
  }, [navContainerRef]
  );
//Call onscroll hook
//useOnScroll(navContainerRef, () => value.setOpen(true));
    return (
        <Container ref={navContainerRef}>
            <Wrapper>
                <Left>
                    <Logo><Umb>Umb</Umb><Randed>randed</Randed></Logo>
                    <Menu ref={menuRef}>
                        <Desc>
                            <Avatar src={avatarIcon}/>
                            <Text1><em>Hey, you are not signed in.</em></Text1>
                            <Text2><em>Plan: [None selected]</em></Text2>
                        </Desc>
                        <MenuItem><MenuDropdownIcons src={homeIcon}/><MenuLink to='/'>Home</MenuLink></MenuItem>
                        <MenuItem><MenuDropdownIcons src={logoIcon}/><MenuLink to='/logo'>Logo</MenuLink></MenuItem>
                        <MenuItem><MenuDropdownIcons src={cardIcon}/><MenuLink to='/cards'>Cards</MenuLink></MenuItem>
                        <MenuItem><MenuDropdownIcons src={promoIcon}/><MenuLink to='/promotionals'>Promotionals</MenuLink></MenuItem>
                        <MenuItem><MenuDropdownIcons src={flyerIcon}/><MenuLink to='/flyers'>Flyers</MenuLink></MenuItem>
                        <MenuItem><MenuDropdownIcons src={loginIcon}/><MenuLink to='/login'>Login</MenuLink></MenuItem>
                    </Menu>
                </Left>
                <MenuButton ref={buttonRef} onClick={toggleMenu}><MenuIcon src={menuIcon}/></MenuButton>
            </Wrapper>
        </Container>
    );
}

export default Navbar;
//display: ${({open}) => open ? 'none' : 'inline-block'};
//onClick={() => setOpen(!open)}
//&:active{
  //  transform: translateY(4px);
//}
//[navContainerRef, handler]