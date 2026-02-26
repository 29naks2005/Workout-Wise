import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';
import './WhatWeOffer.css';

const offers = [
    {
        image: 'https://muscleandhealth.com/wp-content/uploads/2022/01/bodybuild.jpeg',
        title: 'BODY BUILDING',
        description: 'Strength, size, and structure — all tailored for your bodybuilding journey.',
        tag: '01',
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0744/0203/files/1.Header_e73db68e-cfdc-40cb-a330-e673b302a641.jpg?v=1705480606',
        title: 'MUSCLE GAIN',
        description: "Muscle isn't built by chance — it's built by plan. Let's start yours.",
        tag: '02',
    },
    {
        image: 'https://tophealthdoctors.com.au/wp-content/uploads/2024/07/weight-loss.png',
        title: 'WEIGHT LOSS',
        description: 'Lose weight the right way — no shortcuts, just solid strategy.',
        tag: '03',
    },
];

export default function WhatWeOffer() {
    const headerRef = useScrollReveal();
    const gridRef = useStaggerReveal({ stagger: 180 });

    return (
        <section className="offer">
            <div className="offer__container">
                <div className="offer__header reveal-fade-up" ref={headerRef}>
                    <span className="offer__label">WHAT WE DO</span>
                    <h2 className="offer__title">What We <span className="offer__title-accent">Offer</span></h2>
                    <p className="offer__subtitle">Programs designed to push your limits and redefine what's possible.</p>
                </div>

                <div className="offer__grid" ref={gridRef}>
                    {offers.map((item, index) => (
                        <div className="offer__card stagger-item" key={index}>
                            <div className="offer__card-img-wrapper">
                                <img src={item.image} alt={item.title} className="offer__card-img" />
                                <div className="offer__card-tag">{item.tag}</div>
                            </div>
                            <div className="offer__card-body">
                                <h3 className="offer__card-title">{item.title}</h3>
                                <p className="offer__card-desc">{item.description}</p>
                            </div>
                            <div className="offer__card-border"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
