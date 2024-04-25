import React, { useState } from 'react';



const EarthImage = () => {
  const [latitude, setLatitude] = useState('29.78');
  const [longitude, setLongitude] = useState('-95.33');
  const [date, setDate] = useState('2019-01-01');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    const apiKey = 'Cj8Qbeb7PdHM6KF79fd99lf5obQBRK16JRi4xwrc'; // Add your NASA API key here
    const url = `https://api.nasa.gov/planetary/earth/imagery?lon=${longitude}&lat=${latitude}&date=${date}&dim=0.15&api_key=${apiKey}`;

    try {
      console.log('Constructed URL:', url); // Log the constructed API URL
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setImageUrl(url); // Set the image URL directly from the API response
     
      setTimeout(() => {
        setLoading(false); // Hide loading animation
      }, 2000);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  return (
    <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '80px', color: 'white' }}>
    <h2 style={{ fontSize: '2em' }}>Earth Image</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Latitude:
          <input
            type="text"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            style={{ color: 'black', fontSize: '1.2em',marginRight:'50px',borderRadius:'10px' }}
          />
        </label>
        <label>
          Longitude:
          <input
            type="text"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            style={{ color: 'black', fontSize: '1.2em',marginRight:'50px',borderRadius:'10px' }}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ color: 'black', fontSize: '1.2em',marginRight:'50px',borderRadius:'10px' }}
          />
        </label>
        <button type="submit" style={{ color: 'black', fontSize: '1.2em',marginRight:'50px',borderRadius:'10px',backgroundColor:'lightBlue' }}>Get Earth Image</button>
      </form>
      {imageUrl && <img src={imageUrl} alt="Earth" className="image-frame" />}
    </div>
  );
};

export default EarthImage;
