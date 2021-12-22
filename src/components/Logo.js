import React from 'react'
import styled from 'styled-components'
import Splash5 from '../img/Splash5.jpg'
import { MediaQueries } from './MediaQueries';

const Container = styled.div`
    height: auto;
    display: flex;
    background-color: #000000;
    @media only screen and (max-width: 767px){
        flex-direction: column;
        padding: 30px 20px;
        border-top: 0.3px solid #bfbfbf;
    }
`;

const Left = styled.div`
    width: 50%;
    ${MediaQueries('mobileS_min', 'mobileS_max')`
        display: none;
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
`;

const Image = styled.img`
    width: 90%;
    height:100%;
    ${MediaQueries('mobileM_min', 'mobileM_max')`
        align-self: center;
    `}
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

const Title = styled.span`
    font-size: 70px;
    color: white;
    @media only screen and (max-width: 480px){
        font-size: 25px;
    }
    ${MediaQueries('mobileS_min', 'mobileS_max')`
    font-size: 20px;
    margin-bottom: 0px;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
    font-size: 25px;
    margin-top: 20px;
    margin-botttom: 0px;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
    font-size: 30px;
    margin-top: 20px;
    margin-botttom: 0px;
    `}
    ${MediaQueries('tablet_min', 'tablet_max')`
    
    `}
    ${MediaQueries('laptop_min', 'laptop_max')`
    
    `}
    ${MediaQueries('laptopL_min', 'laptopL_max')`
    
    `}
    ${MediaQueries('desktop')`
    
    `}
`;
// const SubTitle = styled.span`
//     font-size: 24px;
//     font-style: italic;
//     color: #333;
//     margin-top: 30px;
// `;

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
    return (
        <Container>
            <Left><Image src={Splash5}/></Left>
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