"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './Slider.css'; 

const slides = [
  {
    image: 'https://t4.ftcdn.net/jpg/04/14/04/09/360_F_414040933_5QBgimwDlUzhFg1nnkirVbb94Reed8ZZ.jpg',
    heading: 'START',
    highlight: 'TRAINING',
    subheading: 'TODAY',
    buttonText: 'JOIN NOW',
    buttonLink: '/join'
  },
  {
    image: 'https://global.discourse-cdn.com/tnation/original/4X/7/0/a/70ab62048176f943b735fc812d427f0d6c3041d5.jpeg',
    heading: 'BUILD',
    highlight: 'MUSCLE',
    subheading: 'FAST',
    buttonText: 'GET STARTED',
    buttonLink: '/get-started'
  },
  {
    image: 'https://t4.ftcdn.net/jpg/07/07/99/65/360_F_707996560_EfSgERO8RKaXUdW87UO10t1TsyofCYfH.jpg',
    heading: 'TRANSFORM',
    highlight: 'YOUR BODY',
    subheading: 'WITH US',
    buttonText: 'EXPLORE',
    buttonLink: '/explore'
  },
  {
    image: 'https://t3.ftcdn.net/jpg/08/13/79/02/360_F_813790223_6EXXi3lzVQWa95rvlVmKkhMSn74OHR6G.jpg',
    heading: 'TRAIN',
    highlight: 'HARD',
    subheading: 'STAY STRONG',
    buttonText: 'JOIN TODAY',
    buttonLink: '/join'
  },
  {
    image: 'https://t4.ftcdn.net/jpg/03/50/81/89/360_F_350818931_54A6UVQiJIK8UHFWB0NTGSIKO9jyTbQP.jpg',
    heading: 'ACHIEVE',
    highlight: 'GOALS',
    subheading: 'WITH GRIT',
    buttonText: 'JOIN NOW',
    buttonLink: '/join'
  }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="slider">
      <img src={currentSlide.image} alt="gym" className="slide-image" />
      <div className="overlay">
        <h2 className="headings">{currentSlide.heading}</h2>
        <h2 className="highlight">{currentSlide.highlight}</h2>
        <h2 className="subheading">{currentSlide.subheading}</h2>
        <Link href="/workouts" className="cta-button">
          {currentSlide.buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Slider;
