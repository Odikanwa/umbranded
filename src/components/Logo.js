import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import LogoImage from '../img/logoImg.png'
import { MediaQueries } from './MediaQueries';

const Container = styled.div`
    height: 100vh;
    display: flex;
    background-color: #000000;
    padding-right: 4%;
    @media only screen and (max-width: 767px){
        auto;
        flex-direction: column;
        padding: 30px 20px;
        border-top: 0.3px solid #bfbfbf;
    }
    @media only screen and (max-width: 900px) and (orientation: landscape){
        height: auto;
        padding-bottom: 20px;
    }
    @media only screen and (min-width:768px) and (max-width:1100px){
        border-top: 0.3px solid #bfbfbf;
    }
`;

const Left = styled.div`
    width: 50%;
    ${MediaQueries('mobileS_min', 'mobileS_max')`
        width: 100%;
        height: 35%;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
    width: 100%;
    height: 35%;
        align-items: center;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
    width: 100%;
    height: 35%;
        align-items: center;
    `}
    ${MediaQueries('tablet_min', 'tablet_max')`
    width: 50%;
    height: 100%;
    align-items: center;
    justify-items: center;
    `}
`;

const Image = styled.img`
    width: 90%;
    height:90%;
    margin-top: 5%;
    vertical-align: middle;
    ${MediaQueries('mobileM_min', 'mobileM_max')`
        align-self: center;
    `}
    ${MediaQueries('tablet_min', 'tablet_max')`
    margin-top: 30%;
        align-self: center;
        height: 60%;
        width: 60%;
    `}
    @media only screen and (min-width:768px) and (max-width:1100px){
        margin-top: 30%;
        align-self: center;
        height: 60%;
        width: 60%;
    }
`;

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width: 767px){
        width: 100%;
    }
`;

const Title = styled.h1`
    font-size: 50px;
    color: white;
    ${MediaQueries('mobileS_min', 'mobileS_max')`
    font-size: 20px;
    margin-top: 10%;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
    font-size: 25px;
    margin-top: 10%;
    margin-botttom: 0px;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
    font-size: 30px;
    margin-top: 10%;
    margin-botttom: 0px;
    `}
    ${MediaQueries('tablet_min', 'tablet_max')`
    font-size: 35px;
    `}
    ${MediaQueries('laptop_min', 'laptop_max')`
    font-size: 40px;
    `}
    @media only screen and (min-width: 600px) and (max-width: 900px) and (orientation: landscape){
        font-size: 38px;
        padding-top: 20px;
    }
    `;
 
const Desc = styled.p`
    font-size: 20px;
    color:  #bfbfbf;
    margin-top: 30px;

    ${MediaQueries('mobileS_min', 'mobileS_max')`
        font-size: 15px;
        margin-right: 0px;
        margin-bottom: 0px;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
        font-size: 1em;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
        font-size: 1em;
    `}
`;
const Button = styled.button`
    width: 150px;
    border: none;
    padding: 15px 20px;
    background-color: #800080;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    margin-top: 30px;
    cursor: pointer;
    ${MediaQueries('mobileS_min', 'mobileS_max')`
        font-size: 15px;
        padding: 7px;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
        font-size: 18px;
        padding: 8px 10px;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
        font-size: 18px;
        padding: 14px 20px;
    `}
`;

const Logo = () => {

    const containerRef = useRef ();

    useEffect(() =>{
        if (window.screen.height <= 480){
            containerRef.current.style.height = "auto";
        }else if (window.screen.height >= 481) {
            containerRef.current.style.height = "100vh"
        }
    });

    return (
        <Container ref={containerRef}>
            <Left><Image src={LogoImage}/></Left>
            <Right>
                <Title>
                    Create da Loggo!
                </Title>
                {/* <SubTitle> Your brand is your best sales team</SubTitle> */}
                <Desc> Nope. Don't do it. You have no need copying another business's logo.
                    All you need is a deep breath and inner peace to summon Loguza, your creative spirit to lead you on as 
                    you ink a masterpiece on our canvas. We only provide the inspiration and the tools; you do all the job...
                    'cos the brand is yours!'
                </Desc>
                <Desc>
                    Dare to be bold. The secret is in the emotions. Let your mind wander, your feelings ooze and your hands scribble.
                    That's really all it takes. 
                </Desc>
                <Button>Learn More</Button>
            </Right>
        </Container>
    )
}

export default Logo;
//Branding: Logo, Letterhead, business cards, Resume