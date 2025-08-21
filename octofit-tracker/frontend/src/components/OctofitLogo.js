import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/octofitapp-small.png';

const OctofitLogo = () => (
  <Link to="/">
    <img src={logo} alt="Octofit Logo" className="octofit-logo" />
  </Link>
);

export default OctofitLogo;
