// import React, { useRef} from 'react'
// import styled from 'styled-components';
// import minicard1 from '../img/minicard1.jpg'
// import minicard2 from '../img/minicard2.jpg'
// import minicard3 from '../img/minicard3.jpg'
// import minicard4 from '../img/minicard4.jpg'
// import minicard5 from '../img/minicard5.png'
// import minicard6 from '../img/minicard6.jpg'
// import minicard7 from '../img/minicard7.jpg'
// import minicard8 from '../img/minicard8.jpg'
// import minicard9 from '../img/minicard9.jpg'
// import minicard10 from '../img/minicard10.png'
// import minicard11 from '../img/minicard11.png'
// import arrowBack from '../img/arrowBack.png'
// import arrowForward from '../img/arrowForward.png'
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Carousel from "./Carousel";



// const Container = styled.div`
//     width: max-content;
//     height: auto;
//     display: flex;
//     flex-direction: row;
//     overflow: hidden;
//     align-items: center;
//     transform: translateX(0px);
//     transition: all 1s ease;
    
// `;

// const MiniContainer = styled.div`
//     width: 35%;
//     margin-right: 10px;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     box-shadow: 5px 5px 9px 1px rgba(0,0,0,0.69);
//     -webkit-box-shadow: 5px 5px 9px 1px rgba(0,0,0,0.69);
//     -moz-box-shadow: 5px 5px 9px 1px rgba(0,0,0,0.69);
// `;

// const Wrapper = styled.div`
//    position: relative;
//    display: flex;
//    flex-direction: row;
//    overflow: hidden;
// `;


// const Image1 = styled.img`
//     width: 100%;
//     height: 110px;
//     margin-right: 10px;
//     border-radius: 10px;
// `;

// const Image2 = styled.img`
//     width: 100%;
//     height: 110px;
//     margin-right: 10px;
//     border-radius: 10px;
// `;

// const Image3 = styled.img`
//     width: 100%;
//     height: 110px;
//     margin-right: 10px;
//     border-radius: 10px;
// `;

// const Image4 = styled.img`
//     width: 100%;
//     height: 110px;
//     margin-right: 10px;
//     border-radius: 10px;
// `;

// const Image5 = styled.img`
//     width: 100%;
//     height: 110px;
//     border-radius: 10px;
// `;

// const Image6 = styled.img`
//     width: 100%;
//     height: 110px;
//     border-radius: 10px;
// `;
// const Image7 = styled.img`
//     width: 100%;
//     height: 110px;
//     border-radius: 10px;
// `;
// const Image8 = styled.img`
//     width: 100%;
//     height: 110px;
//     border-radius: 10px;
// `;
// const Image9 = styled.img`
//     width: 100%;
//     height: 110px;
//     border-radius: 10px;
// `;
// const Image10 = styled.img`
//     width: 100%;
//     height: 110px;
//     border-radius: 10px;
// `;
// const Image11 = styled.img`
//     width: 100%;
//     height: 110px;
//     border-radius: 10px;
// `;
// const ArrowBack = styled.img`
//     left: 0;
//     width: 50px;
//     height: 100%;
//     background-color: rgba(22, 22, 22, 0.5);
//     position: absolute;
//     z-index: 99;
//     top: 0;
//     bottom: 0;
//     margin: auto;
//     cursor: pointer;
// `;

// const ArrowForward = styled.img`
//     position: absolute;
//     right: -50;
//     bottom: 0;
//     top: 0;
//     z-index: 99;
//     transform: translateX(0px);
//     background-color: rgba(255, 153, 204, 0.7);
//     padding: 30px 2px;
//     cursor: pointer;
// `;

// const ArrowForward = styled.img`
//     right: 0;
//     width: 50px;
//     height: 100%;
//     background-color: rgba(22, 22, 22, 0.5);
//     position: absolute;
//     z-index: 99;
//     top: 0;
//     bottom: 0;
//     margin: auto;
//     cursor: pointer;
// `;

// const MiniCard = () => {
    // const [moveRight, setMoveRight] = useState(false);
    // const [moveLeft, setMoveLeft] = useState(false);
    // const [leftArrow, setLeftArrow] = useState(false);
    // const imageRef = useRef();
    // const arrowLeft = useRef();
    // const arrowRight = useRef();

    // const leftArrowClick = () => {
    //     imageRef.current.style.transform = `translateX(${100 }px)`;
    //     //arrowLeft.current.style.display = `none`;
    // }

    // const rightArrowClick = () => {
    //     let distance = imageRef.current.getBoundingClientRect().x - 400;
    //     imageRef.current.style.transform = `translateX(${-50 + distance}px)`;
    //     imageRef.current.style.margin = `50px`;
    //     console.log(distance - 100);
    // }

//     return (
//         <Container /*ref={imageRef}*/>
//            <ArrowBack src={arrowBack} onClick={leftArrowClick} ref={arrowLeft}/>
//             <Image1 src={minicard1} index={0}/>
//             <Image2 src={minicard2} index={1}/>
//             <Image3 src={minicard3} index={2}/>
//             <Image4 src={minicard4} index={3}/>
//             <Image5 src={minicard5} index={5}/>
//             <Image6 src={minicard6} index={6}/>
//             <Image7 src={minicard7} index={7}/>
//             <Image8 src={minicard8} index={8}/>
//             <Image9 src={minicard9} index={9}/>
//             <Image10 src={minicard10} index={10}/>
//             <Image11 src={minicard11} index={11}/>
//             <ArrowForward src={arrowForward} ref={arrowRight} onClick={rightArrowClick}/>  
//            <Carousel/>
//         </Container>
         
//     );
// }

// export default MiniCard;
