import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Smooth scroll to BMI section — navigates to home first if on a different page
    const scrollToBMI = (e) => {
        e.preventDefault();
        setIsOpen(false);

        const scrollToElement = () => {
            const el = document.getElementById('bmi-section');
            if (el) {
                const navbarHeight = 80;
                const y = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        };

        if (location.pathname !== '/') {
            navigate('/');
            // Wait for Home page to mount, then scroll
            setTimeout(scrollToElement, 400);
        } else {
            scrollToElement();
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner">
                <Link to="/" className="navbar__brand">
                    <span className="navbar__brand-icon">⚡</span>
                    <span className="navbar__brand-text">WORKOUT<span className="navbar__brand-accent">WISE</span></span>
                </Link>

                <div className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
                    <Link to="/" className={`navbar__link ${location.pathname === '/' ? 'navbar__link--active' : ''}`}>
                        Home
                    </Link>
                    <Link to="/workouts" className={`navbar__link ${location.pathname === '/workouts' ? 'navbar__link--active' : ''}`}>
                        Workouts
                    </Link>
                    <a href="#bmi-section" className="navbar__link" onClick={scrollToBMI}>
                        BMI
                    </a>
                </div>

                <button
                    className={`navbar__hamburger ${isOpen ? 'navbar__hamburger--active' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
