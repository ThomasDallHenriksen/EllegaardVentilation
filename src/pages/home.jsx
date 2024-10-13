import '../assets/styles/home.scss';

function Home() {
    return (
        <div className="home-container">
            <div className="background-image"></div>
            <div className='specification-section'>
                <div className='section'>
                    <div className='content-text'>
                        <h1>Veludført fynsk ventilationsmontage siden 2018</h1>
                        <h2>Levering af:</h2>
                    </div>
                    <div className='spec-info'>
                        <ul id='spec-undertitle'>
                            <li><h3 id='padding'>Ventilationsmontage</h3></li>
                            <li><h3 id='padding'>1.rums ventilationslæsninger</h3></li>
                        </ul>
                    </div>
                </div>
                <div className='image-container'>
                    <img className='image' src="/images/bil.png" alt="forside image" />
                </div>
            </div>
        </div>
    );
}

export default Home;