import React from 'react';
import sunset from '../icons/superepicsunset.webp';
import { Link } from 'react-router-dom';

function HomePage() {
    const backgroundImageStyle = {
    backgroundImage: `url(${sunset}`,
    opacity: 0.5,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: -1,
  };
  const centerContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 50px)',
    zIndex: 1, 
    position: 'relative', 
    textAlign: 'center',
  };
  
  return (
    <div> 
    <div style={backgroundImageStyle}></div> 
    <div style={centerContentStyle}>
    <div className="home">
      <section className="hero">
        <h1>Your Journey to Peace Begins Here</h1>
        <p>Embark on a path to tranquility with guided meditation and sleep stories.</p>
      </section>
      <section className="features">
        <div className="feature">
          <p>Find inner peace and balance through guided sessions.</p>
        </div>
      </section>
      <Link to="/start">
          <button>Start Now</button>
        </Link>
    </div>
    </div>
    </div>
  );
}

export default HomePage;