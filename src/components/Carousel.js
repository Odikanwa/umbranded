import React, { Component } from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import minicard1 from '../img/minicard1.jpg'
import minicard2 from '../img/minicard2.jpg'
import minicard3 from '../img/minicard3.jpg'
import minicard4 from '../img/minicard4.jpg'
import minicard5 from '../img/minicard5.jpg'
import minicard6 from '../img/minicard6.jpg'
import minicard7 from '../img/minicard7.jpg'
import minicard8 from '../img/minicard8.jpg'
import minicard9 from '../img/minicard9.jpg'
import minicard10 from '../img/minicard10.jpg'
import minicard11 from '../img/minicard11.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { MediaQueries } from "./MediaQueries";

const Container = styled.div`
    width: max-content;
    height: auto;
    display: static;
    overflow: hidden;
    align-items: center;
    
`;

const Wrapper = styled.div`
     margin-right: 15px;
`;

const WrapperSlide1 = styled.div`
   
`;

const Image = styled.img`
    width: 100%;
    height: 110px;
    margin-right: 10px;
    border-radius: 10px;
    cursor: pointer;
    &: hover{
      opacity: 0.7;
    }
   ${MediaQueries('mobileS_min', 'mobileS_max')`
      margin-left: 10px;
      margin-right: 10px;
      height: 150px;
`}
${MediaQueries('mobileM_min', 'mobileM_max')`
      margin-left: 10px;
      margin-right: 10px;
      height: 180px;
`}
${MediaQueries('mobileL_min', 'mobileL_max')`
      margin-left: 10px;
      margin-right: 10px;
      height: 210px;
`}
`;


export default class Carousel extends Component {
  render() {
    let settings = {
      arrows: true,
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 10000,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 539,
          settings: {
            arrows: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Container>
        <Slider {...settings}>
          <div>
            <WrapperSlide1>
          <Wrapper>
          <Image src={minicard1}/>
          </Wrapper>
          </WrapperSlide1>
          </div>
          <div>
          <Wrapper>
          <Image src={minicard2}/>
          </Wrapper>
          </div>
          <div>
          <Wrapper>
          <Image src={minicard3}/>
          </Wrapper>
          </div>
          <div>
          <Wrapper>
          <Image src={minicard4}/>
          </Wrapper>
          </div>
          <div>
          <Wrapper>
          <Image src={minicard5}/>
          </Wrapper>
          </div>
          <div>
          <Wrapper>
          <Image src={minicard6}/>
          </Wrapper>
          </div>
          <div>
          <Wrapper>
          <Image src={minicard7}/>
          </Wrapper>
          </div>
          <div>
          <Wrapper>
          <Image src={minicard8}/>
          </Wrapper>
          </div >
          <div>
          <Wrapper>
          <Image src={minicard9}/>
          </Wrapper>
          </div >
          <div>
          <Wrapper>
          <Image src={minicard10}/>
          </Wrapper>
          </div >
          <div>
          <Wrapper>
          <Image src={minicard11}/>
          </Wrapper>
          </div >
        </Slider>
        </Container>
    );
  };
};