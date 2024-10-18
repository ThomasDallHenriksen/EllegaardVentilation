import { Link } from 'react-router-dom';

import '../assets/styles/footer.scss';

import '../assets/styles/header.scss';

export default function Footer() {
    return (
        <footer className="footer">
      <div className="footer-column">
        <ul>
            <li><img className='footerLogo' src="/images/ellegaardVenLogoClean-transparrent-bagground.png" alt="Company logo" /></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Navigation</h3>
        <ul>
                <li><Link to="/">Forside</Link></li>
                <li><Link to="/galleri">Galleri</Link></li>
                <li><Link to="/about">Hvem er vi</Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Kontakt & Links</h3>
        <ul>
            <li className='footer-flex'>
                <div className='footer__phone-icon'>
                    <i className="fa fa-phone" style={{ color: '#aaa' }}></i>
                </div>
                <div className='footer__info'>
                    <a href="tel:+4553800030" className="footer__phone-link">
                        53 80 00 30
                    </a>
                </div>
            </li>
            <li className='footer-flex'>
                <div className="footer__mail-icon">
                    <i className="fa-solid fa-envelope" style={{ color: '#aaa' }}></i>
                </div>
                <div className='footer__info'>
                    <a href="mailto:kris@ellegaardventilation.dk" className="footer__email-link">
                        kris@ellegaardventilation.dk
                    </a>
                </div>
            </li>
            <li>
                <a href='https://www.facebook.com/ellegaardventilation/' className='footer__link footer__link--facebook' target='_blank' rel='noopener noreferrer'>
                    <i className="fa-brands fa-facebook"></i>
                </a>
            
                <a href='https://www.linkedin.com/in/kristoffer-ellegaard-684408158/' className='footer__link footer__link--linkedin' target='_blank' rel='noopener noreferrer'>
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </li>
        </ul>
      </div>
    </footer>
            );
}
