"use client";
import { useState } from "react";
import "./WorkoutForm.css"; // 👈 yeh line add karna

export default function WorkoutForm({ onSubmit }) {
  const [fitnessLevel, setFitnessLevel] = useState("beginner");
  const [goal, setGoal] = useState("fat_loss");
  const [workoutType, setWorkoutType] = useState("Gym");


  function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ fitnessLevel, goal , workoutType });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="workout-form">
      <label>
        <span>Fitness Level:</span>
        <select
          value={fitnessLevel}
          onChange={(e) => setFitnessLevel(e.target.value)}
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </label>

      <label>
        <span>Goal:</span>
        <select value={goal} onChange={(e) => setGoal(e.target.value)}>
          <option value="fat_loss">Fat Loss</option>
          <option value="muscle_gain">Muscle Gain</option>
          <option value="endurance">Endurance</option>
        </select>
      </label>
      <label>
        <span>Workout Type:</span>
        <select value={goal} onChange={(e) => setWorkoutType(e.target.value)}>
          <option value="Gym">Gym</option>
          <option value="Home_workout">Home Workout</option>
        </select>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
