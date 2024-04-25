import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PicOfDay from './components/picOfDay';
import NavBar from './components/navBar';
import EarthImage from './components/earthImage';
import SignUpForm from './components/signUpForm';
import LogIn from './components/login';
import MarsRovPhoto from './components/marsRovPhotos'
import './App.css';

// Separate component for layout with NavBar
function AppLayout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
       
        <Route
          path="/PicOfDay"
          element={<AppLayout><PicOfDay /></AppLayout>}
        />
        <Route
          path="/MarsRovPhotos"
          element={<AppLayout><MarsRovPhoto/></AppLayout>}
        />
        <Route
          path="/EarthImage"
          element={<AppLayout><EarthImage /></AppLayout>}
        />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/" element={<LogIn />} />
        
      </Routes>
    </Router>
  );
}

export default App;

