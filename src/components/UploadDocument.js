import React, { useState } from 'react';
import './UploadDocument.css';
import './Header.css';
import './Sidebar.css';

const DocumentUpload = ({ isDarkMode }) => {
  const [vehicleType, setVehicleType] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [chassisNumber, setChassisNumber] = useState('');
  const [engineNumber, setEngineNumber] = useState('');
  const [documents, setDocuments] = useState({
    RC: { validFrom: '', validTo: '', file: null },
    Insurance: { validFrom: '', validTo: '', file: null },
    PUC: { validFrom: '', validTo: '', file: null },
    Fitness: { validFrom: '', validTo: '', file: null },
    TPermit: { validFrom: '', validTo: '', file: null },
    RoadTax: { validFrom: '', validTo: '', file: null },
    GreenTax: { validFrom: '', validTo: '', file: null },
  });

  const handleFileChange = (e, docType) => {
    const file = e.target.files[0];
    setDocuments((prev) => ({
      ...prev,
      [docType]: { ...prev[docType], file },
    }));
  };

  const handleValidFromChange = (e, docType) => {
    const validFrom = e.target.value;
    setDocuments((prev) => ({
      ...prev,
      [docType]: { ...prev[docType], validFrom },
    }));
  };

  const handleValidToChange = (e, docType) => {
    const validTo = e.target.value;
    setDocuments((prev) => ({
      ...prev,
      [docType]: { ...prev[docType], validTo },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ vehicleType, registrationNumber, chassisNumber, engineNumber, documents });
  };

  return (
    <div className={`document-upload ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1 className="heading">Document Upload Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="vehicleType">Select Vehicle Type:</label>
        <select
          id="vehicleType"
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          required
        >
          <option value="">Select...</option>
          <option value="bus">Bus</option>
          <option value="tanker">Tanker</option>
          <option value="car">Car</option>
        </select>

        <label htmlFor="registrationNumber">Registration Number:</label>
        <input
          type="text"
          className="upload-input"
          id="registrationNumber"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
          required
        />

        <label htmlFor="chassisNumber">Chassis Number:</label>
        <input
          type="text"
          className="upload-input"
          id="chassisNumber"
          value={chassisNumber}
          onChange={(e) => setChassisNumber(e.target.value)}
          required
        />

        <label htmlFor="engineNumber">Engine Number:</label>
        <input
          type="text"
          className="upload-input"
          id="engineNumber"
          value={engineNumber}
          onChange={(e) => setEngineNumber(e.target.value)}
          required
        />

        <h2>Documents Upload</h2>
        <table className="document-table">
          <thead>
            <tr>
              <th>Document Type</th>
              <th>Valid From</th>
              <th>Valid To</th>
              <th>Upload File</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(documents).map((doc) => (
              <tr key={doc}>
                <td>{doc.charAt(0).toUpperCase() + doc.slice(1)}</td>
                <td>
                  <input
                    type="date"
                    className="upload-input"
                    value={documents[doc].validFrom}
                    onChange={(e) => handleValidFromChange(e, doc)}
                    required
                  />
                </td>
                <td>
                  <input
                    type="date"
                    className="upload-input"
                    value={documents[doc].validTo}
                    onChange={(e) => handleValidToChange(e, doc)}
                    required
                  />
                </td>
                <td>
                  <input
                    type="file"
                    className="upload-input"
                    onChange={(e) => handleFileChange(e, doc)}
                    required
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button type="submit" className="submit-button">Upload Documents</button>
      </form>
    </div>
  );
};

export default DocumentUpload;
