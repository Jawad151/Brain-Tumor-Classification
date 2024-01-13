import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [outputImage, setOutputImage] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('photo', selectedImage);
        console.log(formData);
      const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        const data = response.data;
        setOutputImage(data.model_output);
      } else {
        console.log('Error: ' + response.status);
      }
    } catch (error) {
      console.error(error);
      console.log('Error in getting Image back.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />

      {selectedImage && (
        <div>
          <p>Preview:</p>
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ maxWidth: '100%' }} />
        </div>
      )}

      <button
        style={{
          marginTop: '25px',
          marginBottom: '25px',
          backgroundColor: '#007FFF',
          color: 'white',
          borderRadius: '2px',
          border: 'none',
          width: '200px',
          height: '50px',
        }}
        onClick={handleSubmit}
      >
        Submit
      </button>
      <button
        style={{
          marginTop: '25px',
          marginBottom: '25px',
          backgroundColor: '#007FFF',
          color: 'white',
          borderRadius: '2px',
          border: 'none',
          width: '200px',
          height: '50px',
          marginLeft: '15px',
        }}
        onClick={() => setSelectedImage(null)}
      >
        Remove
      </button>

      {outputImage && (
        <div>
          <h1 style={{ maxWidth: '100%' }}>Pedicted Output  : {outputImage}</h1>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
