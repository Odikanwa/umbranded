import React, { useRef, useEffect, useContext} from 'react'
import styled from 'styled-components'
import menuIcon from '../img/menu24.png'
import homeIcon from '../img/homeIcon.png'
import logoIcon from '../img/logoIcon.png'
import cardIcon from '../img/cardIcon.png'
import promoIcon from '../img/promoIcon.png'
import flyerIcon from '../img/flyerIcon.png'
import loginIcon from '../img/loginIcon.png'
import avatarIcon from '../img/avatarIcon.png'
import { MediaQueries } from './MediaQueries';
import { NavContext } from '../App';

const Container = styled.div`
    height: 50px;
    width: 100vw;
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2500;
    ${MediaQueries('tablet_min', 'desktop')`
    background-color: transparent;
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
    flex-flow: row;
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
    margin-top: 10%;
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
    height: 80px;
`;

const Text1 = styled.p`
    font-size: 1em;
    color: #ffe6ff;
    margin-top: 10px;
`;
const Text2 = styled.p`
    font-size: 1em;
    color: #ffe6ff;
    margin-top: 10px;
`;

const MenuItem = styled.li`
    margin-right: 40px;
    font-size: 1em;
    color: #ffe6ff;
    &:hover{
        text-decoration: 3px underline;
        text-underline-offset: 3px;
    }
    ${MediaQueries('mobileS_min', 'mobileL_max')`
    color: black;
    width: 100%;
    padding: 5%;

    &:hover{
        text-decoration: none;
        color: crimson;
        background-color: #e6e6e6;
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

  const value = useContext(NavContext)

  const buttonRef = useRef();
  const menuRef = useRef();
  //const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    value.setOpen(!value.open)
    
    if(value.open === true){
        //value.blur();
        menuRef.current.style.display = 'block'
        buttonRef.current.style.display = 'none'          
    }else {
        //value.unBlur();
        menuRef.current.style.display = 'none'
        
    };
  }

  const useOnClickOutside = (menuRef, handler) => {
      useEffect(() => {
          const listener = (event) => {
              // Do nothing if clicking ref's element or descendant elements
              if(!menuRef.current || menuRef.current.contains(event.target)){
                  return;
              }else{
                //exit menu
                menuRef.current.style.display = 'none';
                buttonRef.current.style.display = 'inline-block'
              }
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

  useOnClickOutside(menuRef, () => value.setOpen(true));

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo><Umb>Umb</Umb><Randed>randed</Randed></Logo>
                    <Menu ref={menuRef}>
                        <Desc>
                            <Avatar src={avatarIcon}/>
                            <Text1><em>Hey, you are not signed in.</em></Text1>
                            <Text2><em>Plan: [None selected]</em></Text2>
                        </Desc>
                        <MenuItem><MenuDropdownIcons src={homeIcon}/>Home</MenuItem>
                        <MenuItem><MenuDropdownIcons src={logoIcon}/>Logo</MenuItem>
                        <MenuItem><MenuDropdownIcons src={cardIcon}/>Cards</MenuItem>
                        <MenuItem><MenuDropdownIcons src={promoIcon}/>Promotionals</MenuItem>
                        <MenuItem><MenuDropdownIcons src={flyerIcon}/>Flyers</MenuItem>
                        <MenuItem><MenuDropdownIcons src={loginIcon}/>Login</MenuItem>
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