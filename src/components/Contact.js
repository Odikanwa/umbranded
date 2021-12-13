import React from 'react'
import styled from 'styled-components';
import Contact_background from '../img/Contact_background5.png'
import address from '../img/address.png'
import phone from '../img/phone2.png'
import mail from '../img/mail.png'

const Container = styled.div`
    height: 100%;
    background: url(${Contact_background});
    z-index: -1;
    background-color: white;
`;

const Wrapper = styled.div`
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px){
        flex-direction: column;
        padding-top: 0;
     }
`;

const FormContainer = styled.div`
    width: 50%;
    background-color: white;
    padding: 20px;
    @media only screen and (max-width: 480px){
        width: 100%;
     }
`;

const Title = styled.h1`
    margin: 20px 20px 10px 20px;
    color: black;
    z-index: 99;
    @media only screen and (max-width: 480px){
        margin: 10px 20px 20px 25%;
        font-size: 25px;
     }
`;

const Form = styled.div`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;@media only screen and (max-width: 480px){
        flex-direction: column;
     }
`;


const LeftForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    @media only screen and (max-width: 480px){
        height: 50%;
        margin-right: 0;
     }
`;

const RightForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (max-width: 480px){
        height: 50%;
     }
`;

const Input = styled.input`
    width: 200px;
    padding: 20px;
    @media only screen and (max-width: 480px){
        padding: 5px;
     }
`;

const TextArea = styled.textarea`
    width: 200px;
    height: 60%;
    padding: 20px;
    @media only screen and (max-width: 480px){
        padding: 5px;
        margin-top: 20px;
     }
`;

const AddressContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 480px){
        width: 100%;
        margin-top: 20px;
     }
`;

const AddressItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    @media only screen and (max-width: 480px){
        margin-bottom: 20px;
     }
`;

const Icon = styled.img`
    width: 20px;
    margin-right: 20px;
`;

const Text = styled.span`
    font-size: 20px;
    background-color: white;
    margin-right: 10px;
    @media only screen and (max-width: 480px){
        font-size: 14px;
     }
`;

const Button = styled.button`
    border: none;
    padding: 15px;
    background-color: #800080;
    color: white;
    font-size: 20px;
    font-weight: bold;
    border-radius: 20px;
    margin-top: 20px;
    cursor: pointer;
    @media only screen and (max-width: 480px){
        font-size: 15px;
        padding: 10px;
     }
`;

const Contact = () => {
    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <Title>Questions? <br/> Let's Get in Touch</Title>
                    <Form>
                    <LeftForm>
                        <Input placeholder = 'Your Name'></Input>
                        <Input placeholder = 'Your Email'></Input>
                        <Input placeholder = 'Subject'></Input>
                    </LeftForm>
                    <RightForm>
                        <TextArea placeholder='Your Message'></TextArea>
                        <Button>Send</Button>
                    </RightForm>
                    </Form>
                </FormContainer>
                <AddressContainer>
                    <AddressItem>
                        <Icon src={address}/>
                        <Text>99 Odikanwa Str., Ikoyi-Lagos, Nigeria</Text>
                    </AddressItem>
                    <AddressItem>
                        <Icon src={phone}/>
                        <Text>+234 001 7778 9920</Text>
                        <Text>+234 001 7778 9921</Text>
                    </AddressItem>
                    <AddressItem>
                        <Icon src={mail}/>
                        <Text>contact@Umbranded.com | </Text>
                        <Text>info@Umbranded.com</Text>
                    </AddressItem>
                </AddressContainer>
            </Wrapper>
            
        </Container>
    )
}

export default Contact;
