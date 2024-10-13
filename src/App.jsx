import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home';
import Galleri from './pages/galleri';

function App() {

  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/galleri" element={<Galleri />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
