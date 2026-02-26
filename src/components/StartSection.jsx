import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './StartSection.css';

export default function StartSection() {
    const imageRef = useScrollReveal();
    const textRef = useScrollReveal({ rootMargin: '0px 0px -80px 0px' });

    return (
        <section className="start">
            <div className="start__container">
                <div className="start__image-wrapper reveal-slide-left" ref={imageRef}>
                    <img
                        src="https://www.pts.sg/wp-content/uploads/2017/12/Muscle-and-Body-Building-Training-1000x423.jpg"
                        alt="Workout Highlight"
                        className="start__image"
                    />
                    <div className="start__image-glow"></div>
                </div>
                <div className="start__text reveal-slide-right" ref={textRef}>
                    <span className="start__label">READY TO BEGIN?</span>
                    <h2 className="start__heading">
                        Achieve Your <span className="start__accent">Fitness Goals</span> With One Click
                    </h2>
                    <p className="start__desc">
                        Stop dreaming and start doing. Your transformation journey begins right here, right now.
                    </p>
                    <Link to="/workouts" className="start__btn">
                        Start Now
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
