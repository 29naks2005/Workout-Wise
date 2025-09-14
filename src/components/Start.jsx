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
          src="https://static.vecteezy.com/system/resources/previews/007/662/087/large_2x/healthy-lifestyle-concept-horizontal-shot-of-motivated-fitness-woman-in-active-wear-poses-in-plank-pose-on-fitness-mat-exercises-outdoors-enjoys-regular-training-wears-sunglasses-at-summer-time-free-photo.JPG" 
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
