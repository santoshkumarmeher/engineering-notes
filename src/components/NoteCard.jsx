import React from 'react';

const NoteCard = ({ note }) => {
  const handleDownload = () => {
    // For GitHub Pages, files should be in public folder
    const link = document.createElement('a');
    link.href = note.file;
    link.download = note.title;
    link.click();
  };

  const handleView = () => {
    window.open(note.file, '_blank');
  };

  return (
    <div className="note-card">
      <div className="note-header">
        <h3>{note.title}</h3>
        <span className={`file-type ${note.type}`}>{note.type.toUpperCase()}</span>
      </div>
      <div className="note-info">
        <p><strong>Teacher:</strong> {note.teacher}</p>
        <p><strong>College:</strong> {note.college}</p>
        <p><strong>Date:</strong> {new Date(note.date).toLocaleDateString()}</p>
      </div>
      <div className="note-actions">
        <button onClick={handleView} className="btn view-btn">
          View
        </button>
        <button onClick={handleDownload} className="btn download-btn">
          Download
        </button>
      </div>
    </div>
  );
};

export default NoteCard;