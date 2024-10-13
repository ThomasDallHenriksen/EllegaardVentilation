import { Link, useLocation } from 'react-router-dom';
import '../assets/styles/navbar.scss';


export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="nav">
            <Link to="/" className="logo">
                <img className="logoImg" src="/images/ellegaardVenLogoClean-transparrent-bagground.png" alt="Logo" />
            </Link>
            <div className="nav-buttons">
                {location.pathname !== '/galleri' && (
                    <Link to="/galleri">
                        <button className="navLinks">Galleri</button>
                    </Link>
                )}
                {location.pathname !== '/galleri' && (
                <Link to="">
                    <button className="navLinks">Hvem er vi</button>
                </Link>
                )}
            </div>
        </nav>
    );
}