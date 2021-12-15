import React from 'react'
import styled from 'styled-components'
import Splash5 from '../img/Splash5.jpg'

const Container = styled.div`
    height: 100vh;
    display: flex;
    background-color: #000000;
    @media only screen and (max-width: 480px){
        flex-direction: column;
        padding: 30px 20px;
    }
`;

const Left = styled.div`
    width: 50%;
    @media only screen and (max-width: 480px){
        display: none;
    }
`;

const Image = styled.img`
    width: 90%;
    height:100%;
`;

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width: 480px){
        width: 100%;
    }
`;

const Title = styled.span`
    font-size: 70px;
    color: white;
    @media only screen and (max-width: 480px){
        font-size: 25px;
    }
`;
// const SubTitle = styled.span`
//     font-size: 24px;
//     font-style: italic;
//     color: #333;
//     margin-top: 30px;
// `;

const Desc = styled.p`
    font-size: 20px;
    color: #777;
    margin-top: 30px;
    margin-right: 60px;
    @media only screen and (max-width: 480px){
        font-size: 16px;
        color:  #bfbfbf
    }
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
    @media only screen and (max-width: 480px){
        font-size: 18px;
        padding: 8px 10px;
    }
`;

const Feature = () => {
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

export default Feature
//Branding: Logo, Letterhead, business cards, Resume