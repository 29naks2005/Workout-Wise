"use client";
import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Start.css";

export default function Start() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="highlight-section">
      <h2 className="highlight-heading" data-aos="fade-up">
        Achieve Your <span className="highlight-word">Fitness Goals</span> With One Click
      </h2>

      <div className="features image-container" data-aos="fade-up">
        <img 
          src="https://www.pts.sg/wp-content/uploads/2017/12/Muscle-and-Body-Building-Training-1000x423.jpg" 
          alt="Workout Highlight"
          className="highlight-image"
        />
        
        <Link href="/workouts" className="highlight-button" data-aos="fade-up" data-aos-delay="100">
          Start Now
        </Link>
      </div>
    </section>
  );
}
