import Slider from "@/components/Slider";
import Navbar from "./../components/Navbar"
import WhatIOffer from "@/components/WhatIOffer";
import WorkoutHighlight from "@/components/WorkoutHighlight";
import BMICalculator from "@/components/BMICalculator";
import Start from "@/components/Start";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Start/>
      <WhatIOffer />
      <WorkoutHighlight/>
      <BMICalculator/>
    </div>
  );
}

