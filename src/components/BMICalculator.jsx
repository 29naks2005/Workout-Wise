import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './BMICalculator.css';

export default function BMICalculator() {
    const imageRef = useScrollReveal();
    const panelRef = useScrollReveal({ rootMargin: '0px 0px -80px 0px' });
    const [weight, setWeight] = useState('');
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [bmi, setBmi] = useState(null);
    const [status, setStatus] = useState('');
    const [calories, setCalories] = useState(null);
    const [mode, setMode] = useState('bmi');

    const getHeightInCm = () => {
        const f = Number(feet);
        const i = Number(inches);
        const totalInches = f * 12 + i;
        return totalInches * 2.54;
    };

    const calculateBMI = () => {
        if (!weight || !feet || inches === '') return;
        const heightCm = getHeightInCm();
        const heightM = heightCm / 100;
        const bmiVal = Number(weight) / (heightM * heightM);
        setBmi(bmiVal.toFixed(2));

        if (bmiVal < 18.5) setStatus('Underweight');
        else if (bmiVal < 25) setStatus('Normal');
        else if (bmiVal < 30) setStatus('Overweight');
        else setStatus('Obese');
    };

    const calculateCalories = () => {
        if (!weight || !feet || inches === '' || !age || !gender) return;
        const heightCm = getHeightInCm();
        const w = Number(weight);
        const a = Number(age);

        const bmr =
            gender === 'male'
                ? 10 * w + 6.25 * heightCm - 5 * a + 5
                : 10 * w + 6.25 * heightCm - 5 * a - 161;

        setCalories(Math.round(bmr));
    };

    const getStatusColor = () => {
        if (!status) return 'var(--accent-cyan)';
        switch (status) {
            case 'Underweight': return '#60a5fa';
            case 'Normal': return 'var(--accent-green)';
            case 'Overweight': return 'var(--accent-amber)';
            case 'Obese': return '#ef4444';
            default: return 'var(--accent-cyan)';
        }
    };

    return (
        <section className="calc" id="bmi-section">
            <div className="calc__container">
                <div className="calc__visual reveal-slide-left" ref={imageRef}>
                    <img
                        src="https://wehco.media.clients.ellingtoncms.com/cocagne/img/photos/2017/08/12/147640769_LIFE_NTR-HEALTH-ONNUTRITION_MN427131848_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d"
                        alt="Health & Nutrition"
                        className="calc__image"
                    />
                    <div className="calc__image-overlay">
                        <span className="calc__image-badge">CALCULATE</span>
                    </div>
                </div>

                <div className="calc__panel reveal-slide-right" ref={panelRef}>
                    <div className="calc__tabs">
                        <button
                            className={`calc__tab ${mode === 'bmi' ? 'calc__tab--active' : ''}`}
                            onClick={() => setMode('bmi')}
                        >
                            BMI Calculator
                        </button>
                        <button
                            className={`calc__tab ${mode === 'calories' ? 'calc__tab--active' : ''}`}
                            onClick={() => setMode('calories')}
                        >
                            Maintenance Calories
                        </button>
                    </div>

                    <div className="calc__header">
                        <h2 className="calc__title">
                            {mode === 'bmi' ? 'Calculate your ' : 'Know your '}
                            <span className="calc__title-accent">{mode === 'bmi' ? 'BMI' : 'Calories'}</span>
                        </h2>
                        <p className="calc__subtitle">
                            {mode === 'bmi'
                                ? 'Your body speaks the truth — Let your BMI be your guide.'
                                : 'Maintain your body by fueling it the right way.'}
                        </p>
                    </div>

                    <div className="calc__form">
                        <div className="calc__field">
                            <label className="calc__label">Weight</label>
                            <input
                                type="number"
                                placeholder="KG"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                className="calc__input"
                            />
                        </div>

                        <div className="calc__field-row">
                            <div className="calc__field">
                                <label className="calc__label">Height (ft)</label>
                                <input
                                    type="number"
                                    placeholder="Feet"
                                    value={feet}
                                    onChange={(e) => setFeet(e.target.value)}
                                    className="calc__input"
                                />
                            </div>
                            <div className="calc__field">
                                <label className="calc__label">Height (in)</label>
                                <input
                                    type="number"
                                    placeholder="Inches"
                                    value={inches}
                                    onChange={(e) => setInches(e.target.value)}
                                    className="calc__input"
                                />
                            </div>
                        </div>

                        {mode === 'calories' && (
                            <>
                                <div className="calc__field">
                                    <label className="calc__label">Age</label>
                                    <input
                                        type="number"
                                        placeholder="Years"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        className="calc__input"
                                    />
                                </div>
                                <div className="calc__field">
                                    <label className="calc__label">Gender</label>
                                    <select
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                        className="calc__select"
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </>
                        )}

                        <button
                            className="calc__submit"
                            onClick={mode === 'bmi' ? calculateBMI : calculateCalories}
                        >
                            Calculate
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>

                        {mode === 'bmi' && bmi && (
                            <div className="calc__result" style={{ borderColor: getStatusColor() }}>
                                <div className="calc__result-value" style={{ color: getStatusColor() }}>{bmi}</div>
                                <div className="calc__result-status" style={{ color: getStatusColor() }}>{status}</div>
                            </div>
                        )}

                        {mode === 'calories' && calories && (
                            <div className="calc__result" style={{ borderColor: 'var(--accent-cyan)' }}>
                                <div className="calc__result-value" style={{ color: 'var(--accent-cyan)' }}>{calories}</div>
                                <div className="calc__result-status" style={{ color: 'var(--text-secondary)' }}>kcal / day</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
