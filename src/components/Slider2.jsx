"use client";
import React, { useState, useEffect, useRef } from 'react';
import './Slider2.css';

const videos = [
  'https://assets.mixkit.co/videos/52317/52317-720.mp4',
  'https://assets.mixkit.co/videos/608/608-720.mp4',
  'https://assets.mixkit.co/active_storage/video_items/100541/1725384884/100541-video-720.mp4',
  'https://assets.mixkit.co/active_storage/video_items/100545/1725385175/100545-video-720.mp4'
];

const Slider2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); 
      videoRef.current.play().catch(() => {}); 
    }
  }, [currentIndex]);

  return (
    <div className="slider fullscreen-video">
      <video
        key={currentIndex}
        ref={videoRef}
        className="video-background"
        autoPlay
        muted
        playsInline
      >
        <source src={videos[currentIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  
      {/* Text overlay strictly inside video */}
      <div className="video-text-overlay">
        No Pain, <span>No Gain</span>
      </div>
    </div>
  );
  
  
};

export default Slider2;