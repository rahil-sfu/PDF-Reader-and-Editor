import React, { useState } from 'react';
import './App.css';

function App() {
  const [dragging, setDragging] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setFileName(file.name);
      e.dataTransfer.clearData();
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div
          className={`drag-drop-zone ${dragging ? 'dragging' : ''}`}
          onDragEnter={handleDragEnter}
          onDragOver={(e) => e.preventDefault()}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <p>Drag and drop a file here or click the button below to upload.</p>
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={handleFileInput}
          />
          <label htmlFor="fileInput" className="upload-button">
            Select File
          </label>
          {fileName && <p className="file-name">Uploaded File: {fileName}</p>}
        </div>
      </header>
    </div>
  );
}

export default App;

