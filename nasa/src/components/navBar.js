import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from './firebase';

function NavBar() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      console.log('Signed out successfully');

      window.history.replaceState(null, null, '/');

     
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">NASA</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/PicOfDay">Pic Of Day</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to="/MarsRovPhotos">Mars Rover Photos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/EarthImage">Earth Image</NavLink>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={handleSignOut} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>Exit</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
