import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import AdsSection from '../components/AdsSection';
import { branches } from '../data/mockData';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      
      <section className="branches-section">
        <div className="container">
          <h2>Engineering Branches</h2>
          <div className="branches-grid">
            {branches.map(branch => (
              <Link 
                key={branch.id} 
                to={`/branches/${branch.code}`}
                className="branch-card"
              >
                <h3>{branch.name}</h3>
                <p>{branch.code}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AdsSection />
    </div>
  );
};

export default Home;