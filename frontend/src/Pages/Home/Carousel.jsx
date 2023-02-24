import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

export  const Carousel = ({dots,
    infinite,
    slidesToShow,
    slidesToScroll,
    autoplay,
    autoplaySpeed,
    pauseOnHover,Img})=> {
        const nav = useNavigate();
    
const handleClick = ()=>{
nav("/location")
}

    var settings = {
        dots:dots,
        infinite:infinite,
        slidesToShow:slidesToShow,
        slidesToScroll:slidesToScroll,
        autoplay:autoplay,
        autoplaySpeed:autoplaySpeed,
        pauseOnHover:pauseOnHover,
         arrows:false
      };
    
    return (
      <div  width="100%">
        <Slider {...settings}>
         {Img && Img.map((el,i)=>(
        <div key={i} style={{width:"95%", textAlign:"center"}} onClick={handleClick} >
        <img src={el.img} alt={i} style={{width:"100%"}}/>
        <h3 style={{textAlign:"center",fontWeight:'bold',fontSize:'18px',color:'#8a8f8f'}} >{el.price}</h3>
        <h3 style={{ textAlign:"center", fontWeight:"bold",fontSize:'18px'}}>{el.title}</h3>
        </div>
         ))}
          
        </Slider>
      </div>
    );
  }