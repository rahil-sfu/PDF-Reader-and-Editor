// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Document, Page } from 'react-pdf';
// import { pdfjs } from 'react-pdf';  // Import pdfjs from react-pdf

// // Set the workerSrc for pdfjs
// pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@2.7.570/build/pdf.worker.min.js`;

// import './App.css';

// function PdfViewer() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const file = location.state?.file;

//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   const handleDelete = () => {
//     navigate('/');
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div>
//           <button className="upload-button" onClick={handleDelete}>
//             Delete
//           </button>
//           <button className="upload-button">Pencil</button>
//           <button className="upload-button">Erase</button>
//           <button className="upload-button">Save</button>
//         </div>
//         {file ? (
//           <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
//             <Page pageNumber={pageNumber} />
//           </Document>
//         ) : (
//           <p>No file selected.</p>
//         )}
//         {numPages && (
//           <div>
//             <button
//               className="upload-button"
//               onClick={() => setPageNumber(Math.max(pageNumber - 1, 1))}
//               disabled={pageNumber === 1}
//             >
//               Previous
//             </button>
//             <button
//               className="upload-button"
//               onClick={() => setPageNumber(Math.min(pageNumber + 1, numPages))}
//               disabled={pageNumber === numPages}
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </header>
//     </div>
//   );
// }

// export default PdfViewer;

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf'; // Import pdfjs from react-pdf

// Set the workerSrc for pdfjs
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

pdfjs.GlobalWorkerOptions.workerSrc = 
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.7.570/pdf.worker.min.js';

import './App.css';

function PdfViewer() {
  const navigate = useNavigate();
  const location = useLocation();
  const file = location.state?.file;

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleDelete = () => {
    navigate('/');
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button className="upload-button" onClick={handleDelete}>
            Delete
          </button>
          <button className="upload-button">Pencil</button>
          <button className="upload-button">Erase</button>
          <button className="upload-button">Save</button>
        </div>
        {file ? (
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
        ) : (
          <p>No file selected.</p>
        )}
        {numPages && (
          <div>
            <button
              className="upload-button"
              onClick={() => setPageNumber(Math.max(pageNumber - 1, 1))}
              disabled={pageNumber === 1}
            >
              Previous
            </button>
            <button
              className="upload-button"
              onClick={() => setPageNumber(Math.min(pageNumber + 1, numPages))}
              disabled={pageNumber === numPages}
            >
              Next
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default PdfViewer;