import React from 'react';

const NoteCard = ({ note }) => {
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = note.file;
    
    // Set the download attribute with proper file extension
    const fileName = `${note.title.replace(/[^a-zA-Z0-9]/g, '_')}.${note.type}`;
    link.download = fileName;
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    // Open in new tab for viewing
    window.open(note.file, '_blank', 'noopener,noreferrer');
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
          View PDF
        </button>
        <button onClick={handleDownload} className="btn download-btn">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default NoteCard;