'use client';
import React, { useState, useEffect } from 'react';
import './Workout.css';
import Navbar from '@/components/Navbar';
import Slider2 from '@/components/Slider2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WorkoutSearch = () => {
  const [data, setData] = useState([]);
  const [randomData, setRandomData] = useState([]);
  const [text, setText] = useState("");
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });

    async function fetchRandomData() {
      const url = `https://exercisedb.p.rapidapi.com/exercises?limit=20&offset=0`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '182b69f8a8msh2a3b53184741d69p129ce6jsn239b15a652b0',
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        }
      };
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setRandomData(result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRandomData();
  }, []);

  useEffect(() => {
    if (text && text !== "Select") {
      fetchData();
    }
  }, [text]);

  async function fetchData() {
    setLoading(true);
    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${text.toLowerCase()}?limit=1000&offset=0`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '182b69f8a8msh2a3b53184741d69p129ce6jsn239b15a652b0',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Navbar />
      <Slider2 />

      <div className='heading'>
        {!selectedExercise ? (
          <>
            <h1 data-aos="fade-up">Select BodyPart For Workout</h1>
            <select
              onChange={(e) => setText(e.target.value)}
              value={text}
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <option value="">Select</option>
              <option value="back">Back</option>
              <option value="chest">Chest</option>
              <option value="cardio">Cardio</option>
              <option value="lower arms">Lower Arms</option>
              <option value="upper arms">Upper Arms</option>
              <option value="lower legs">Lower Legs</option>
              <option value="upper legs">Upper Legs</option>
              <option value="waist">Waist</option>
              <option value="neck">Neck</option>
              <option value="shoulders">Shoulders</option>
            </select>

            {loading ? (
              <div style={{ marginTop: '20px' }}>
                <h2>Loading...</h2>
              </div>
            ) : (
              <div className='exercise-list'>
                {(data.length > 0 ? data : randomData).map((item) => (
                  <div
                    className='exercise-card'
                    key={item.id}
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <h3>{item.name}</h3>
                    <p><strong>Target:</strong> {item.target}</p>
                    <p><strong>Equipment:</strong> {item.equipment}</p>
                    <img
                      src={item.gifUrl}
                      alt={item.name}
                      onClick={() => setSelectedExercise(item)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className='exercise-detail'>
            <button onClick={() => setSelectedExercise(null)}>⬅ Back</button>
            <h2>{selectedExercise.name.toUpperCase()}</h2>
            <img src={selectedExercise.gifUrl} alt={selectedExercise.name} />
            <p><span>Target Muscle </span>: {selectedExercise.target.toUpperCase()}</p>
            <p><span>Equipment </span>: {selectedExercise.equipment.toUpperCase()}</p>
            <p><span>Body Part </span>: {selectedExercise.bodyPart.toUpperCase()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutSearch;
