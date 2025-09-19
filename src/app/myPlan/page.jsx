"use client";

import WorkoutForm from "@/components/WorkoutForm";

export default function WorkoutPage() {
  function handleWorkoutSubmit(data) {
    console.log("Form Data:", data);
  }

  return (
    <div>
      <h1>Workout Plan Generator</h1>
      <WorkoutForm onSubmit={handleWorkoutSubmit} />
    </div>
  );
}
