import "./WorkoutHighlight.css";

export default function WorkoutHighlight() {
  return (
    <section className="highlight-section">
      <h2 className="highlight-heading">
        The real <span className="highlight-word">workout</span> starts when you want to stop.
      </h2>

      <div className="features">
        <div className="feature">
          <img src="https://icons.iconarchive.com/icons/icons8/ios7/512/Sports-Dumbbell-icon.png" alt="Dumbbell" />
          <h4>Intense Workouts</h4>
          <p>
            Push beyond limits and redefine your fitness level with hardcore training plans.
          </p>
        </div>

        <div className="feature">
          <img src="https://cdn-icons-png.flaticon.com/512/3573/3573484.png" alt="Heart Rate" />
          <h4>Track Progress</h4>
          <p>
            Monitor every heartbeat and calorie burn to stay on top of your transformation.
          </p>
        </div>

        <div className="feature">
          <img src="https://w7.pngwing.com/pngs/142/427/png-transparent-goal-logo-success-life-support-achievement-life-coaching-motivation-gym-motivate.png" alt="Podium" />
          <h4>Achieve Goals</h4>
          <p>
            Break through your milestones and rise to the top of your personal leaderboard.
          </p>
        </div>
      </div>
    </section>
  );
}
