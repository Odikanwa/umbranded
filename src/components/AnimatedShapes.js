import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    overflow: hidden !important;
`;
const Square = styled.div`
    width: 60px;
    height: 60px;
    background-color: #ff6600;
    opacity: 0.7;
    position: absolute;
    top: -60px;
    left: -60px;
    z-index: -1;
    animation: square 25s linear alternate infinite;

    @keyframes square {
        to{
            overflow: hidden;
            transform: translate(100vw, 100vh);
        }
    }
    @media only screen and (max-width: 480px){
        color: #ff66ff;
        width: 40px;
        height: 40px;
    }
`;

const Oval = styled.div`
    width: 200px; 
    height: 100px; 
    -moz-border-radius: 100px / 50px; 
    -webkit-border-radius: 100px / 50px; 
    border-radius: 100px / 50px;
    background-color:  #ff66cc;
    opacity: 0.7;
    position: absolute;
    top: -60px;
    left: 60px;
    z-index: -1;
    animation: square 25s linear alternate infinite;

    @keyframes square {
        to{
            overflow: hidden;
            transform: translate(100vw, 100vh);
        }
    }
    @media only screen and (max-width: 480px){
        color:  #ff66cc;
        width: 70px;
        height: 35px;
    }
`;

const Circle = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #990099;
    opacity: 0.5;
    position: absolute;
    bottom: -60px;
    left: -60px;
    z-index: -1;
    animation: circle 25s linear alternate infinite;

    @keyframes circle {
        to{
            overflow: hidden;
            transform: translate(100vw, -100vh);
        }
    }
    @media only screen and (max-width: 480px){
        width: 40px;
        height: 40px;
    }
`;

const RightAngle = styled.div`
    width: 0;
    height: 0;
    border-top: 100px solid red;
    border-left: 100px solid transparent;
    opacity: 0.5;
    position: absolute;
    top: 400px;
    left: -50px;
    z-index: -1;
    animation: rightangle 25s linear alternate infinite;

    @keyframes rightangle {
        to{
            overflow: hidden;
            transform: translate(100vw, -50vh);
        }
    }
    @media only screen and (max-width: 480px){
        border-top: 40px solid red;
        border-left: 40px solid transparent;
    }
`;

const AnimatedShapes = () => {
    return (
        <Container>
        <>
          <Oval/>
          <Square/>
          <Circle/>
          <RightAngle/>
          
        </>
        </Container>
    );
};

export default AnimatedShapes;
