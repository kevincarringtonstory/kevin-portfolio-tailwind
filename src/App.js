import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PortfolioPage from './components/PortfolioPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <PortfolioPage />
      <Footer />
    </div>
  );
}

export default App;
