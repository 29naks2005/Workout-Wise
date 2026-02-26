import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSlider.css';

const slides = [
    {
        image: 'https://t4.ftcdn.net/jpg/04/14/04/09/360_F_414040933_5QBgimwDlUzhFg1nnkirVbb94Reed8ZZ.jpg',
        heading: 'START',
        highlight: 'TRAINING',
        subheading: 'TODAY',
        buttonText: 'JOIN NOW',
    },
    {
        image: 'https://global.discourse-cdn.com/tnation/original/4X/7/0/a/70ab62048176f943b735fc812d427f0d6c3041d5.jpeg',
        heading: 'BUILD',
        highlight: 'MUSCLE',
        subheading: 'FAST',
        buttonText: 'GET STARTED',
    },
    {
        image: 'https://t4.ftcdn.net/jpg/07/07/99/65/360_F_707996560_EfSgERO8RKaXUdW87UO10t1TsyofCYfH.jpg',
        heading: 'TRANSFORM',
        highlight: 'YOUR BODY',
        subheading: 'WITH US',
        buttonText: 'EXPLORE',
    },
    {
        image: 'https://t3.ftcdn.net/jpg/08/13/79/02/360_F_813790223_6EXXi3lzVQWa95rvlVmKkhMSn74OHR6G.jpg',
        heading: 'TRAIN',
        highlight: 'HARD',
        subheading: 'STAY STRONG',
        buttonText: 'JOIN TODAY',
    },
    {
        image: 'https://t4.ftcdn.net/jpg/03/50/81/89/360_F_350818931_54A6UVQiJIK8UHFWB0NTGSIKO9jyTbQP.jpg',
        heading: 'ACHIEVE',
        highlight: 'GOALS',
        subheading: 'WITH GRIT',
        buttonText: 'JOIN NOW',
    }
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimating(true);
            setTimeout(() => {
                setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
                setAnimating(false);
            }, 500);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const slide = slides[current];

    return (
        <section className="hero">
            <div className="hero__bg-wrapper">
                <img
                    src={slide.image}
                    alt="Fitness"
                    className={`hero__bg-image ${animating ? 'hero__bg-image--exit' : 'hero__bg-image--enter'}`}
                    key={current}
                />
            </div>

            <div className="hero__overlay"></div>

            <div className={`hero__content ${animating ? 'hero__content--exit' : ''}`}>
                <p className="hero__tag">FORGE YOUR BODY</p>
                <h1 className="hero__heading">
                    {slide.heading}
                    <span className="hero__heading-highlight"> {slide.highlight}</span>
                </h1>
                <h2 className="hero__subheading">{slide.subheading}</h2>
                <Link to="/workouts" className="hero__cta">
                    {slide.buttonText}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>

            <div className="hero__indicators">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
                        onClick={() => { setCurrent(i); }}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSlider;
