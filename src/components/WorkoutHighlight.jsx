import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';
import './WorkoutHighlight.css';

const features = [
    {
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="4" y="18" width="6" height="12" rx="2" fill="currentColor" />
                <rect x="38" y="18" width="6" height="12" rx="2" fill="currentColor" />
                <rect x="13" y="14" width="8" height="20" rx="3" fill="currentColor" opacity="0.7" />
                <rect x="27" y="14" width="8" height="20" rx="3" fill="currentColor" opacity="0.7" />
                <rect x="10" y="22" width="28" height="4" rx="2" fill="currentColor" />
            </svg>
        ),
        title: 'Intense Workouts',
        desc: 'Push beyond limits and redefine your fitness level with hardcore training plans.',
    },
    {
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.2" />
                <path d="M24 8C24 8 30 16 30 24C30 32 24 40 24 40C24 40 18 32 18 24C18 16 24 8 24 8Z" fill="currentColor" opacity="0.6" />
                <circle cx="24" cy="24" r="6" fill="currentColor" />
                <path d="M12 18L16 22M36 18L32 22M12 30L16 26M36 30L32 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
        ),
        title: 'Track Progress',
        desc: 'Monitor every heartbeat and calorie burn to stay on top of your transformation.',
    },
    {
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M24 4L28 16H40L30 24L34 36L24 28L14 36L18 24L8 16H20L24 4Z" fill="currentColor" opacity="0.7" />
                <path d="M24 12L26.5 20H34L28 25L30.5 33L24 28L17.5 33L20 25L14 20H21.5L24 12Z" fill="currentColor" />
            </svg>
        ),
        title: 'Achieve Goals',
        desc: 'Break through your milestones and rise to the top of your personal leaderboard.',
    },
];

export default function WorkoutHighlight() {
    const leftRef = useScrollReveal();
    const cardsRef = useStaggerReveal({ stagger: 200 });

    return (
        <section className="highlight">
            <div className="highlight__container">
                <div className="highlight__left reveal-slide-left" ref={leftRef}>
                    <span className="highlight__label">WHY CHOOSE US</span>
                    <h2 className="highlight__heading">
                        The real <span className="highlight__accent">workout</span> starts when you want to stop.
                    </h2>
                </div>

                <div className="highlight__cards" ref={cardsRef}>
                    {features.map((feat, i) => (
                        <div className="highlight__card stagger-item" key={i}>
                            <div className="highlight__card-icon">{feat.icon}</div>
                            <h4 className="highlight__card-title">{feat.title}</h4>
                            <p className="highlight__card-desc">{feat.desc}</p>
                            <div className="highlight__card-num">{String(i + 1).padStart(2, '0')}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
