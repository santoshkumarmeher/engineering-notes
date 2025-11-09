import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Engineering Notes</h1>
        <p>Your one-stop destination for quality engineering study materials</p>
        <div className="hero-stats">
          <div className="stat">
            <h3>500+</h3>
            <p>Notes Available</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Expert Teachers</p>
          </div>
          <div className="stat">
            <h3>10+</h3>
            <p>Engineering Branches</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;