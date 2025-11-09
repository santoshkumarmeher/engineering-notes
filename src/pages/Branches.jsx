import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { branches, subjects } from '../data/mockData';

const Branches = () => {
  const { branchCode } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  
  const branch = branches.find(b => b.code === branchCode);
  const branchSubjects = subjects[branchCode] || [];

  const filteredSubjects = branchSubjects.filter(subject =>
    subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    subject.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!branch) {
    return <div className="container">Branch not found</div>;
  }

  return (
    <div className="container">
      <div className="page-header">
        <h1>{branch.name} Subjects</h1>
        <SearchBar 
          onSearch={setSearchQuery}
          placeholder="Search subjects..."
        />
      </div>

      <div className="subjects-grid">
        {filteredSubjects.map(subject => (
          <Link 
            key={subject.id} 
            to={`/subjects/${branchCode}/${subject.code}`}
            className="subject-card"
          >
            <h3>{subject.name}</h3>
            <p>{subject.code}</p>
          </Link>
        ))}
      </div>

      {filteredSubjects.length === 0 && (
        <div className="no-results">
          <p>No subjects found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default Branches;