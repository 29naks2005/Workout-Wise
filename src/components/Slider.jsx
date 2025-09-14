"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './Slider.css'; 

const slides = [
  {
    image: 'https://images.squarespace-cdn.com/content/v1/636969f5a011d748629bcac2/8f698cf6-4357-4f29-b983-c611aaaf05dd/cristiano+ronaldo+working+out.jpeg',
    heading: 'START',
    highlight: 'TRAINING',
    subheading: 'TODAY',
    buttonText: 'JOIN NOW',
    buttonLink: '/join'
  },
  {
    image: 'https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2019/08/John-Cena-Sitting-Down-Resting.jpg?quality=86&strip=all',
    heading: 'BUILD',
    highlight: 'MUSCLE',
    subheading: 'FAST',
    buttonText: 'GET STARTED',
    buttonLink: '/get-started'
  },
  {
    image: 'https://hips.hearstapps.com/hmg-prod/images/z6c-2629-centr-power-image-credit-centr-1624308552.jpg',
    heading: 'TRANSFORM',
    highlight: 'YOUR BODY',
    subheading: 'WITH US',
    buttonText: 'EXPLORE',
    buttonLink: '/explore'
  },
  {
    image: 'https://images.wallpapersden.com/image/download/dwayne-johnson-workout-hd-gym-photoshoot_bW5uammUmZqaraWkpJRmbmdlrWZlbWc.jpg',
    heading: 'TRAIN',
    highlight: 'HARD',
    subheading: 'STAY STRONG',
    buttonText: 'JOIN TODAY',
    buttonLink: '/join'
  },
  {
    image: 'https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2018/10/MU0116_FE_COVER_05.jpg?quality=86&strip=all',
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
