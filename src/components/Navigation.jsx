import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show navigation on home page
  if (location.pathname === '/') {
    return null;
  }

  const goBack = () => {
    navigate(-1);
  };

  const goForward = () => {
    navigate(1);
  };

  const goHome = () => {
    navigate('/');
  };

  // Get current page title for display
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path.includes('/branches/')) return 'Branch Subjects';
    if (path.includes('/subjects/')) return 'Subject Notes';
    if (path.includes('/skills')) return 'Skills Development';
    return 'Engineering Notes';
  };

  return (
    <div className="navigation">
      <div className="container">
        <div className="nav-buttons">
          <button onClick={goBack} className="nav-btn back-btn" title="Go Back">
            <span className="nav-icon">←</span>
            Back
          </button>
          
          <button onClick={goHome} className="nav-btn home-btn" title="Go Home">
            <span className="nav-icon">🏠</span>
            Home
          </button>
          
          <button onClick={goForward} className="nav-btn forward-btn" title="Go Forward">
            Forward
            <span className="nav-icon">→</span>
          </button>
        </div>
        
        <div className="current-page">
          <h2>{getCurrentPage()}</h2>
        </div>
        
        <div className="breadcrumb">
          {getBreadcrumb(location.pathname)}
        </div>
      </div>
    </div>
  );
};

// Helper function to generate breadcrumb
const getBreadcrumb = (pathname) => {
  const paths = pathname.split('/').filter(path => path);
  const breadcrumbs = [];
  
  if (paths.length > 0) {
    breadcrumbs.push(
      <span key="home" className="breadcrumb-item">
        <a href="/">Home</a>
      </span>
    );
  }

  paths.forEach((path, index) => {
    const isLast = index === paths.length - 1;
    const displayName = getDisplayName(path, index, paths);
    
    if (isLast) {
      breadcrumbs.push(
        <span key={path} className="breadcrumb-item active">
          {displayName}
        </span>
      );
    } else {
      const href = '/' + paths.slice(0, index + 1).join('/');
      breadcrumbs.push(
        <span key={path} className="breadcrumb-item">
          <a href={href}>{displayName}</a>
          <span className="breadcrumb-separator"> / </span>
        </span>
      );
    }
  });

  return breadcrumbs;
};

// Helper function to get display names for breadcrumb
const getDisplayName = (path, index, paths) => {
  if (index === 0 && path === 'skills') return 'Skills';
  if (index === 0 && path === 'branches') return 'Branches';
  
  // For branch codes
  const branchNames = {
    'CSE': 'Computer Science',
    'ME': 'Mechanical Engineering', 
    'EE': 'Electrical Engineering',
    'CE': 'Civil Engineering',
    'ECE': 'Electronics & Communication'
  };
  
  if (index === 1 && branchNames[path]) {
    return branchNames[path];
  }
  
  // For subject codes
  if (index === 3) {
    return path.replace(/([A-Z])(\d)/, '$1 $2'); // Convert CS201 to CS 201
  }
  
  return path.charAt(0).toUpperCase() + path.slice(1);
};

export default Navigation;