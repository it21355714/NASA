import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const MarsRovPhotos = () => {
  const [sol, setSol] = useState('1000');
  const [camera, setCamera] = useState('');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const cameras = ["CHEMCAM", "FHAZ", "MARDI", "RHAZ"]; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const apiKey = 'Cj8Qbeb7PdHM6KF79fd99lf5obQBRK16JRi4xwrc';
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&api_key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos(data.photos);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching photos:', error);
      setLoading(false);
    }
  };

  return (
    <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '80px', color: 'white'}}>
      <h2 style={{ fontSize: '2em' }}>Mars Rover Photos</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Sol:
          <input
            type="number"
            value={sol}
            onChange={(e) => setSol(e.target.value)}
            style={{ color: 'black', fontSize: '1.2em',marginRight:'50px',borderRadius:'10px' }}
          />
        </label>
        <label>
          Camera:
          <select value={camera} onChange={(e) => setCamera(e.target.value)} style={{ color: 'black', fontSize: '1.2em',marginRight:'50px',borderRadius:'10px'}}>
            {cameras.map((cameraType) => (
              <option key={cameraType} value={cameraType}>{cameraType}</option>
            ))}
          </select>
        </label>
        <button type="submit" style={{ fontSize: '1.2em',borderRadius:'10px',backgroundColor:'lightBlue' }}>Get Photos</button>
      </form>
      {loading && <p>Loading...</p>}
      {photos.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {photos.map((photo) => (
            <div key={photo.id} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', width: '500px', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={photo.img_src} alt={`Mars Rover Photo - Sol ${sol}`} style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default MarsRovPhotos;
