import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EnhancedNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show navigation on home page
  if (location.pathname === '/') {
    return null;
  }

  const canGoBack = window.history.state && window.history.state.idx > 0;
  const canGoForward = window.history.state && window.history.state.idx < window.history.length - 2;

  const goBack = () => {
    if (canGoBack) {
      navigate(-1);
    }
  };

  const goForward = () => {
    if (canGoForward) {
      navigate(1);
    }
  };

  const goHome = () => {
    navigate('/');
  };

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path.includes('/branches/')) {
      const branchCode = path.split('/')[2];
      const branchNames = {
        'CSE': 'Computer Science',
        'ME': 'Mechanical Engineering', 
        'EE': 'Electrical Engineering',
        'CE': 'Civil Engineering',
        'ECE': 'Electronics & Communication'
      };
      return `${branchNames[branchCode] || branchCode} Subjects`;
    }
    if (path.includes('/subjects/')) {
      const subjectCode = path.split('/')[3];
      return `${subjectCode} Notes`;
    }
    if (path.includes('/skills')) return 'Skills Development';
    return 'Engineering Notes';
  };

  return (
    <div className="navigation">
      <div className="container">
        <div className="nav-buttons">
          <button 
            onClick={goBack} 
            className="nav-btn back-btn" 
            title="Go Back"
            disabled={!canGoBack}
          >
            <span className="nav-icon">←</span>
            Back
          </button>
          
          <button onClick={goHome} className="nav-btn home-btn" title="Go Home">
            <span className="nav-icon">🏠</span>
            Home
          </button>
          
          <button 
            onClick={goForward} 
            className="nav-btn forward-btn" 
            title="Go Forward"
            disabled={!canGoForward}
          >
            Forward
            <span className="nav-icon">→</span>
          </button>
        </div>
        
        <div className="current-page">
          <h2>{getCurrentPage()}</h2>
        </div>
      </div>
    </div>
  );
};

export default EnhancedNavigation;