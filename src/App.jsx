import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home';
import Galleri from './pages/galleri';
import About from './pages/about';
import './assets/styles/app.scss';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/galleri" element={<Galleri />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
