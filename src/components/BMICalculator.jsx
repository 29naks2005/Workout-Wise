"use client";
import { useState } from "react";
import "./BMICalculator.css";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");
  const [calories, setCalories] = useState(null);
  const [mode, setMode] = useState("bmi");

  const getHeightInCm = () => {
    const f = Number(feet);
    const i = Number(inches);
    const totalInches = f * 12 + i;
    return totalInches * 2.54;
  };

  const calculateBMI = () => {
    if (!weight || !feet || inches === "") return;
    const heightCm = getHeightInCm();
    const heightM = heightCm / 100;
    const bmiVal = Number(weight) / (heightM * heightM);
    setBmi(bmiVal.toFixed(2));

    if (bmiVal < 18.5) setStatus("Underweight");
    else if (bmiVal < 25) setStatus("Normal");
    else if (bmiVal < 30) setStatus("Overweight");
    else setStatus("Obese");
  };

  const calculateCalories = () => {
    if (!weight || !feet || inches === "" || !age || !gender) return;
    const heightCm = getHeightInCm();
    const w = Number(weight);
    const a = Number(age);

    const bmr =
      gender === "male"
        ? 10 * w + 6.25 * heightCm - 5 * a + 5
        : 10 * w + 6.25 * heightCm - 5 * a - 161;

    setCalories(Math.round(bmr));
  };

  return (
    <>
      <h1>Calculate Your BMI & Maintenance Calories</h1>
      <div className="bmi-container">
        <div className="bmi-left">
          <img
            src="https://wehco.media.clients.ellingtoncms.com/cocagne/img/photos/2017/08/12/147640769_LIFE_NTR-HEALTH-ONNUTRITION_MN427131848_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d"
            alt="bmi"
          />
        </div>

        <div className="bmi-right">
          <div className="bmi-toggle">
            <button
              onClick={() => setMode("bmi")}
              className={mode === "bmi" ? "active" : ""}
            >
              BMI Calculator
            </button>
            <button
              onClick={() => setMode("calories")}
              className={mode === "calories" ? "active" : ""}
            >
              Maintenance Calories
            </button>
          </div>

          <h2>
            {mode === "bmi" ? "Calculate your " : "Know your "}
            <span>{mode === "bmi" ? "BMI" : "Calories"}</span>
          </h2>
          <p>
            {mode === "bmi"
              ? "Your body speaks the truth — Let your BMI be your guide."
              : "Maintain your body by fueling it the right way."}
          </p>

          <div className="bmi-box">
            <div className="bmi-inputs">
              <input
                placeholder="Weight (KG)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
              <div className="height-inputs">
                <input
                  placeholder="Height (ft)"
                  value={feet}
                  onChange={(e) => setFeet(e.target.value)}
                />
                <input
                  placeholder="Height (inch)"
                  value={inches}
                  onChange={(e) => setInches(e.target.value)}
                />
              </div>
              {mode === "calories" && (
                <>
                  <input
                    placeholder="Age (Years)"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </>
              )}
            </div>

            <button onClick={mode === "bmi" ? calculateBMI : calculateCalories}>
              Calculate
            </button>

            {mode === "bmi" && bmi && (
              <div className="bmi-result">
                {bmi} ({status})
              </div>
            )}

            {mode === "calories" && calories && (
              <div className="bmi-result">{calories} kcal/day</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
