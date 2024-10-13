import '../assets/styles/header.scss';

export default function Header() {
    return (
        <div className="header__container">
            <div className='header__info-section'>
                <div className='header__phone-icon'>
                    <i className="fa fa-phone" style={{ color: 'white' }}></i>
                </div>
                <div className='header__info'>
                    <a href="tel:+4553800030" className="header__phone-link">
                        53 80 00 30
                    </a>
                </div>
                <div className="header__mail-icon">
                    <i className="fa-solid fa-envelope" style={{ color: 'white' }}></i>
                </div>
                <div className='header__info'>
                    <a href="mailto:Kris@ellegaardventilation.dk" className="header__email-link">
                        Kris@ellegaardventilation.dk
                    </a>
                </div>
            </div>
            <div className='header__link-section'>
                <a href='https://www.facebook.com/ellegaardventilation/' className='header__link header__link--facebook' target='_blank' rel='noopener noreferrer'>
                    <i className="fa-brands fa-facebook"></i>
                </a>
                <a href='https://www.linkedin.com/in/kristoffer-ellegaard-684408158/' className='header__link header__link--linkedin' target='_blank' rel='noopener noreferrer'>
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </div>
        </div>
    );
}
