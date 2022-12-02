import React, { useState, useEffect } from 'react';
import './Slider.scss';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 6000;


    const data = [
        "https://images.pexels.com/photos/2529172/pexels-photo-2529172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1496647/pexels-photo-1496647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1144834/pexels-photo-1144834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];

const slideLength = data.length

    const backSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
      };
    
      const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
      };

      function auto() {
        slideInterval = setInterval(nextSlide, intervalTime)
      }
    
      useEffect(() => {
        setCurrentSlide(0)
      }, []);
    
      useEffect(() => {
        if (autoScroll) {
          auto()
        }
        return () => clearInterval(slideInterval)
      }, [currentSlide]);
  return (
    <div className='slider'>
      <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        <img src={data[3]} alt="" />
        <img src={data[4]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={backSlide}>
            <KeyboardDoubleArrowLeftIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
            <KeyboardDoubleArrowRightIcon />
        </div>
      </div>
    </div>
  )
}

export default Slider
