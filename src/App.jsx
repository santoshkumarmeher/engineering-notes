import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
// import Navigation from './components/Navigation.jsx';
import Navigation from './components/EnhancedNavigation.jsx';
import Home from './pages/Home.jsx';
import Branches from './pages/Branches.jsx';
import Subjects from './pages/Subjects.jsx';
import Skills from './pages/Skills.jsx';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation /> 
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/branches/:branchCode" element={<Branches />} />
            <Route path="/subjects/:branchCode/:subjectCode" element={<Subjects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;