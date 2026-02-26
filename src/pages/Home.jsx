import HeroSlider from '../components/HeroSlider';
import StartSection from '../components/StartSection';
import WhatWeOffer from '../components/WhatWeOffer';
import WorkoutHighlight from '../components/WorkoutHighlight';
import BMICalculator from '../components/BMICalculator';

export default function Home() {
    return (
        <>
            <HeroSlider />
            <StartSection />
            <WhatWeOffer />
            <WorkoutHighlight />
            <BMICalculator />
        </>
    );
}
