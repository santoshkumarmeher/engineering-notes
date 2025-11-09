import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import NoteCard from '../components/NoteCard';
import { notes } from '../data/mockData';

const Subjects = () => {
  const { branchCode, subjectCode } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  
  const subjectNotes = notes[subjectCode] || [];

  const filteredNotes = subjectNotes.filter(note => {
    const matchesSearch = 
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.teacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.college.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = filterType === 'all' || note.type === filterType;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container">
      <div className="page-header">
        <h1>Notes for {subjectCode}</h1>
        
        <div className="filters">
          <SearchBar 
            onSearch={setSearchQuery}
            placeholder="Search notes, teachers, colleges..."
          />
          
          <select 
            value={filterType} 
            onChange={(e) => setFilterType(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Types</option>
            <option value="pdf">PDF Only</option>
            <option value="ppt">PPT Only</option>
          </select>
        </div>
      </div>

      <div className="notes-grid">
        {filteredNotes.map(note => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>

      {filteredNotes.length === 0 && (
        <div className="no-results">
          <p>No notes found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Subjects;