import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Workouts.css';

const videos = [
    'https://assets.mixkit.co/videos/52317/52317-720.mp4',
    'https://assets.mixkit.co/videos/608/608-720.mp4',
    'https://assets.mixkit.co/active_storage/video_items/100541/1725384884/100541-video-720.mp4',
    'https://assets.mixkit.co/active_storage/video_items/100545/1725385175/100545-video-720.mp4'
];

const bodyParts = [
    { label: 'Back', value: 'back' },
    { label: 'Chest', value: 'chest' },
    { label: 'Cardio', value: 'cardio' },
    { label: 'Lower Arms', value: 'lower arms' },
    { label: 'Upper Arms', value: 'upper arms' },
    { label: 'Lower Legs', value: 'lower legs' },
    { label: 'Upper Legs', value: 'upper legs' },
    { label: 'Waist', value: 'waist' },
    { label: 'Neck', value: 'neck' },
    { label: 'Shoulders', value: 'shoulders' },
];

export default function Workouts() {
    const [data, setData] = useState([]);
    const [randomData, setRandomData] = useState([]);
    const [text, setText] = useState('');
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [customWorkout, setCustomWorkout] = useState([]);
    const [showCustomWorkout, setShowCustomWorkout] = useState(false);
    const [loading, setLoading] = useState(false);
    const [videoIdx, setVideoIdx] = useState(0);
    const videoRef = useRef(null);
    const controlsRef = useScrollReveal();
    const detailRef = useScrollReveal();

    // Video rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setVideoIdx((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play().catch(() => { });
        }
    }, [videoIdx]);

    // Fetch random exercises on load
    useEffect(() => {
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

        const savedWorkout = localStorage.getItem('myWorkout');
        if (savedWorkout) {
            setCustomWorkout(JSON.parse(savedWorkout));
        }

        fetchRandomData();
    }, []);

    // Save custom workout to localStorage
    useEffect(() => {
        localStorage.setItem('myWorkout', JSON.stringify(customWorkout));
    }, [customWorkout]);

    // Fetch exercises by body part
    useEffect(() => {
        if (text && text !== '') {
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

    const addToCustomWorkout = (exercise) => {
        if (!customWorkout.find(item => item.id === exercise.id)) {
            setCustomWorkout([...customWorkout, exercise]);
        }
    };

    const removeFromCustomWorkout = (id) => {
        setCustomWorkout(customWorkout.filter(item => item.id !== id));
    };

    const clearWorkout = () => {
        setCustomWorkout([]);
        localStorage.removeItem('myWorkout');
    };

    const exercises = data.length > 0 ? data : randomData;

    return (
        <div className="workouts">
            {/* ─── Video Banner ─── */}
            <div className="workouts__banner">
                <video
                    key={videoIdx}
                    ref={videoRef}
                    className="workouts__banner-video"
                    autoPlay
                    muted
                    playsInline
                >
                    <source src={videos[videoIdx]} type="video/mp4" />
                </video>
                <div className="workouts__banner-overlay">
                    <h1 className="workouts__banner-title">
                        No Pain, <span>No Gain</span>
                    </h1>
                </div>
            </div>

            {/* ─── Main Content ─── */}
            <div className="workouts__content">
                {!selectedExercise ? (
                    <>
                        {/* Controls */}
                        <div className="workouts__controls reveal-fade-up" ref={controlsRef}>
                            <div className="workouts__controls-left">
                                <h2 className="workouts__section-title">
                                    Select BodyPart For <span className="workouts__accent">Workout</span>
                                </h2>
                                <select
                                    onChange={(e) => setText(e.target.value)}
                                    value={text}
                                    className="workouts__select"
                                >
                                    <option value="">All Exercises</option>
                                    {bodyParts.map((bp) => (
                                        <option key={bp.value} value={bp.value}>{bp.label}</option>
                                    ))}
                                </select>
                            </div>

                            <button
                                className={`workouts__toggle-btn ${showCustomWorkout ? 'workouts__toggle-btn--active' : ''}`}
                                onClick={() => setShowCustomWorkout(!showCustomWorkout)}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                </svg>
                                My Workout ({customWorkout.length})
                            </button>
                        </div>

                        {/* Custom Workout or Exercise Grid */}
                        {showCustomWorkout ? (
                            <div className="workouts__custom">
                                <div className="workouts__custom-header">
                                    <h3 className="workouts__custom-title">My Custom Workout</h3>
                                    {customWorkout.length > 0 && (
                                        <button className="workouts__clear-btn" onClick={clearWorkout}>
                                            Clear All
                                        </button>
                                    )}
                                </div>

                                {customWorkout.length === 0 ? (
                                    <div className="workouts__empty">
                                        <p>No workouts added yet. Browse exercises and add them here!</p>
                                    </div>
                                ) : (
                                    <div className="workouts__grid">
                                        {customWorkout.map((exercise) => (
                                            <div key={exercise.id} className="workouts__card">
                                                <div className="workouts__card-img-wrapper">
                                                    <img src={exercise.gifUrl} alt={exercise.name} className="workouts__card-img" />
                                                </div>
                                                <div className="workouts__card-body">
                                                    <h3 className="workouts__card-name">{exercise.name}</h3>
                                                    <button
                                                        className="workouts__card-remove"
                                                        onClick={() => removeFromCustomWorkout(exercise.id)}
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : loading ? (
                            <div className="workouts__loading">
                                <div className="workouts__spinner"></div>
                                <p>Loading exercises...</p>
                            </div>
                        ) : (
                            <div className="workouts__grid">
                                {exercises.map((item) => (
                                    <div className="workouts__card" key={item.id}>
                                        <div className="workouts__card-img-wrapper">
                                            <img
                                                src={item.gifUrl}
                                                alt={item.name}
                                                className="workouts__card-img"
                                                onClick={() => setSelectedExercise(item)}
                                            />
                                        </div>
                                        <div className="workouts__card-body">
                                            <h3 className="workouts__card-name">{item.name}</h3>
                                            <div className="workouts__card-tags">
                                                <span className="workouts__card-tag">{item.target}</span>
                                                <span className="workouts__card-tag workouts__card-tag--secondary">{item.equipment}</span>
                                            </div>
                                            {customWorkout.some(ex => ex.id === item.id) ? (
                                                <button className="workouts__card-btn workouts__card-btn--added" disabled>
                                                    ✓ Added
                                                </button>
                                            ) : (
                                                <button
                                                    className="workouts__card-btn"
                                                    onClick={() => addToCustomWorkout(item)}
                                                >
                                                    + Add to Workout
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    /* ─── Exercise Detail ─── */
                    <div className="workouts__detail reveal-scale" ref={detailRef}>
                        <button className="workouts__back-btn" onClick={() => setSelectedExercise(null)}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Back to exercises
                        </button>

                        <div className="workouts__detail-layout">
                            <div className="workouts__detail-visual">
                                <img src={selectedExercise.gifUrl} alt={selectedExercise.name} className="workouts__detail-img" />
                            </div>
                            <div className="workouts__detail-info">
                                <h2 className="workouts__detail-name">{selectedExercise.name.toUpperCase()}</h2>
                                <div className="workouts__detail-meta">
                                    <div className="workouts__detail-row">
                                        <span className="workouts__detail-label">Target Muscle</span>
                                        <span className="workouts__detail-value">{selectedExercise.target.toUpperCase()}</span>
                                    </div>
                                    <div className="workouts__detail-row">
                                        <span className="workouts__detail-label">Equipment</span>
                                        <span className="workouts__detail-value">{selectedExercise.equipment.toUpperCase()}</span>
                                    </div>
                                    <div className="workouts__detail-row">
                                        <span className="workouts__detail-label">Body Part</span>
                                        <span className="workouts__detail-value">{selectedExercise.bodyPart.toUpperCase()}</span>
                                    </div>
                                </div>

                                {customWorkout.some(ex => ex.id === selectedExercise.id) ? (
                                    <button className="workouts__detail-btn workouts__detail-btn--added" disabled>
                                        ✓ Already in Workout
                                    </button>
                                ) : (
                                    <button
                                        className="workouts__detail-btn"
                                        onClick={() => addToCustomWorkout(selectedExercise)}
                                    >
                                        + Add to My Workout
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
