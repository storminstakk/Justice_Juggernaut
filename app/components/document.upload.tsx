import React from 'react';

const DocumentUpload: React.FC = () => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Perform file upload logic here
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <h1>Upload a Document</h1>
      <form action="/upload" method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
        <input type="file" name="file" id="file" onChange={handleFileUpload} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default DocumentUpload;
