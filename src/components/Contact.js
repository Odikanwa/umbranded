import React from 'react'
import styled from 'styled-components';
import Contact_background from '../img/Contact_background5.png'
import address from '../img/address.png'
import phone from '../img/phone2.png'
import mail from '../img/mail.png'
import { MediaQueries } from './MediaQueries';

const Container = styled.div`
    height: auto;
    background: url(${Contact_background});
    z-index: -1;
    background-color: white;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${MediaQueries('mobileS_min', 'mobileS_max')`
        flex-direction: column;
        padding-top: 0;
        padding: 20px;
     `}
     ${MediaQueries('mobileM_min', 'mobileM_max')`
        flex-direction: column;
        padding-top: 0;
        margin-left: 20px;
     `}
     ${MediaQueries('mobileL_min', 'mobileL_max')`
        flex-direction: column;
        padding-top: 0;
        margin-left: 20px;
     `}
     
`;

const FormContainer = styled.div`
    width: 50%;
    ${MediaQueries('mobileS_min', 'mobileS_max')`
        width: 100%;
        height: 70%;
     `}
     ${MediaQueries('mobileM_min', 'mobileM_max')`
        width: 100%;
        height: 70%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
     `}
     ${MediaQueries('mobileL_min', 'mobileL_max')`
        width: 100%;
        height: 70%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
     `}
`;

const Title = styled.h1`
    color: black;
    z-index: 99;
    margin-top: 10%;
    margin-bottom: 15%;
     ${MediaQueries('mobileS_min', 'mobileS_max')`
     margin-bottom: 10px;
     font-size: 20px;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
    margin-bottom: 30px;
    font-size: 25px;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
    margin-bottom: 30px;
    font-size: 30px;
    `}
`;

const Form = styled.div`
    height: 250px;
    display: flex;
    align-items: flex-start;
    @media only screen and (max-width: 767px){
        flex-direction: column;
    }
    `;


const LeftForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${MediaQueries('mobileS_min', 'mobileS_max')`
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
    `}
`;

const RightForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${MediaQueries('mobileS_min', 'mobileS_max')`
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
    `}
`;

const Input = styled.input`
    width: 200px;
    padding: 20px;
    border: 2px solid #999999;
    margin-bottom: 2%;
     ${MediaQueries('mobileS_min', 'mobileS_max')`
       padding: 5px;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
       width: 240px;
       padding: 7px;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
       width: 300px;
       padding: 10px;
    `}
`;

const TextArea = styled.textarea`
    width: 200px;
    height: 60%;
    padding: 20px;
    border: 2px solid #999999;
    ${MediaQueries('mobileS_min', 'mobileS_max')`
        padding: 5px;
        margin-top: 20px;
        
     `}
     ${MediaQueries('mobileM_min', 'mobileM_max')`
        width: 240px;
        padding: 40px 5px;
        margin-top: 20px;
        margin-bottom: 10px;
     `}
     ${MediaQueries('mobileL_min', 'mobileL_max')`
        width: 300px;
        padding: 60px 10px;
        margin-top: 20px;
        margin-bottom: 10px;
     `}
`;

const AddressContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;

     ${MediaQueries('mobileS_min', 'mobileS_max')`
     width: 100%;
     height: 100%;
     align-items: flex-start;
     margin-top: 10%;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
     width: 100%;
     height: 100%;
     align-items: flex-start;
     margin-top: 25%;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
     width: 100%;
     height: 100%;
     align-items: flex-start;
     margin-top: 35%;
    `}
`;

const AddressItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    ${MediaQueries('mobileS_min', 'mobileS_max')`
        margin-bottom: 10px;
     `}
     ${MediaQueries('mobileM_min', 'mobileM_max')`
        margin-bottom: 12px;
     `}
     ${MediaQueries('mobileL_min', 'mobileL_max')`
        margin-bottom: 16px;
     `}
`;

const Icon = styled.img`
    width: 20px;
    margin-right: 20px;
    ${MediaQueries('mobileS_min', 'mobileS_max')`
    margin-right: 10px;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
    margin-right: 10px;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
    margin-right: 10px;
    `}
`;

const Text = styled.span`
    font-size: 20px;
    background-color: white;
    margin-right: 10px;

     ${MediaQueries('mobileS_min', 'mobileS_max')`
     font-size: 13px;
     `}
     ${MediaQueries('mobileM_min', 'mobileM_max')`
     font-size: 15px;
     `}
     ${MediaQueries('mobileL_min', 'mobileL_max')`
     font-size: 1em;
     `}
`;

const Button = styled.button`
    border: none;
    padding: 15px;
    background-color: #800080;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    margin-top: 20px;
    cursor: pointer;

     ${MediaQueries('mobileS_min', 'mobileS_max')`
    margin-top: 8%;
    font-size: 15px;
    padding: 7px;
    `}
    ${MediaQueries('mobileM_min', 'mobileM_max')`
    margin-top: 10%;
    font-size: 18px;
    padding: 8px 10px;
    `}
    ${MediaQueries('mobileL_min', 'mobileL_max')`
    margin-top: 6%;
    font-size: 18px;
    padding: 14px 20px;
    `}
    
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
                        <Text>+234 001 7778 9920,  </Text>
                        <Text>+234 001 7778 9921</Text>
                    </AddressItem>
                    <AddressItem>
                        <Icon src={mail}/>
                        <Text>contact@umbranded.com</Text>
                    </AddressItem>
                </AddressContainer>
            </Wrapper>
            
        </Container>
    )
}

export default Contact;
