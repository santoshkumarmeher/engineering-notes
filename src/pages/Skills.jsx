import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import NoteCard from '../components/NoteCard';
import { skills } from '../data/mockData';

const Skills = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(skills.map(skill => skill.category))];

  const filteredSkills = skills.filter(skill => {
    const matchesSearch = 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">
      <div className="page-header">
        <h1>Skills Development</h1>
        
        <div className="filters">
          <SearchBar 
            onSearch={setSearchQuery}
            placeholder="Search skills..."
          />
          
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-select"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="skills-container">
        {filteredSkills.map(skill => (
          <div key={skill.id} className="skill-category">
            <h2>{skill.name}</h2>
            <p className="category-badge">{skill.category}</p>
            
            <div className="resources-grid">
              {skill.resources.map((resource, index) => (
                <NoteCard 
                  key={index} 
                  note={{
                    ...resource,
                    teacher: 'Industry Expert',
                    college: 'Skill Development',
                    date: '2024-01-01'
                  }} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredSkills.length === 0 && (
        <div className="no-results">
          <p>No skills resources found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Skills;