import React from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';

const App = () => {

  const rotateImage = useSpring({
    transform: 'rotate(360deg)',
    from: { transform: 'rotate(0deg)' },
    config: { duration: 8000, loop: true },
  });

  return (
    <div className="container">
      <header >
        <h1>Step into Style</h1>
        <p>Discover our latest collection of comfortable and fashionable shoes.</p>
      </header>
      <section className="shoe-section">
        <animated.div className="shoe-image" style={rotateImage}></animated.div>
        <div className="shoe-details" >
          <h2>Comfort Redefined</h2>
          <p>Step into comfort with our premium collection of shoes designed for your everyday adventures.</p>
          <a href="#shop" className="cta-button">Shop Now</a>
        </div>
      </section>
    </div>
  );
};

export default App;
