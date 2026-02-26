import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__brand">
                    <Link to="/" className="footer__logo">
                        <span className="footer__logo-icon">⚡</span>
                        WORKOUT<span className="footer__logo-accent">WISE</span>
                    </Link>
                    <p className="footer__tagline">
                        Your ultimate fitness companion. Train smarter, get stronger, and transform your body.
                    </p>
                </div>

                <div className="footer__links-group">
                    <h4 className="footer__links-title">Quick Links</h4>
                    <Link to="/" className="footer__link">Home</Link>
                    <Link to="/workouts" className="footer__link">Workouts</Link>
                </div>

                <div className="footer__links-group">
                    <h4 className="footer__links-title">Programs</h4>
                    <span className="footer__link">Body Building</span>
                    <span className="footer__link">Muscle Gain</span>
                    <span className="footer__link">Weight Loss</span>
                </div>

                <div className="footer__links-group">
                    <h4 className="footer__links-title">Tools</h4>
                    <span className="footer__link">BMI Calculator</span>
                    <span className="footer__link">Calorie Counter</span>
                </div>
            </div>

            <div className="footer__bottom">
                <p className="footer__copy">
                    &copy; {new Date().getFullYear()} WorkoutWise. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
