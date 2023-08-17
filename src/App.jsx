import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';
import Section from './components/Section';

import Home from './pages/Home';
import Transportation from './pages/Transportation';
import Destination from './pages/Destination';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Accomodation from './pages/Accomodation';

import ManilaHotel from './pages/ManilaHotel';
import ManilaResort from './pages/ManilaResort';
import ManilaCondo from './pages/ManilaCondo';
import ManilaCamp from './pages/ManilaCamp';

import IlocosHotel from './pages/IlocosHotel';
import IlocosResort from './pages/IlocosResort';
import IlocosCondo from './pages/IlocosCondo';
import IlocosCamp from './pages/IlocosCamp';

import BgcHotel from './pages/BgcHotel';
import BgcResort from './pages/BgcResort';
import BgcCondo from './pages/BgcCondo';
import BgcCamp from './pages/BgcCamp';

import ScrollButton from './components/ScrollButton';


const Footer = () => {
 
  return (
    <div className="text-center footer-lower bg-white" id="footer">
      {/* Existing code */}
      <div className="footer-lower">
        <div className="media-container-row">
          <div className="col-sm-12">
            <hr />
          </div>
        </div>
        <div className="col-sm-12 copyright pl-0">
          <p className="text-black mbr-text mbr-fonts-style mbr-white display-7">
            ©2023 One Luxor - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

import './assets/web/assets/mobirise-icons2/mobirise2.css';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/bootstrap/css/bootstrap-grid.min.css';
import './assets/bootstrap/css/bootstrap-reboot.min.css';
import './assets/animatecss/animate.css';
import './assets/dropdown/css/style.css';
import './assets/socicon/css/styles.css';
import './assets/theme/css/style.css';
import './assets/mobirise/css/mbr-additional.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidenav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Transportation" element={<Transportation />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Accomodation" element={<Accomodation />} />
        <Route path="/services" element={<Services />} />
        <Route path="/manilahotel" element={<ManilaHotel />} />
        <Route path="/manilaresort" element={<ManilaResort />} />
        <Route path="/manilacondo" element={<ManilaCondo />} />
        <Route path="/manilacamp" element={<ManilaCamp />} />
        <Route path="/ilocoshotel" element={<IlocosHotel />} />
        <Route path="/ilocosresort" element={<IlocosResort />} />
        <Route path="/ilocoscondo" element={<IlocosCondo />} />
        <Route path="/ilocoscamp" element={<IlocosCamp />} />
        <Route path="/bgchotel" element={<BgcHotel />} />
        <Route path="/bgcresort" element={<BgcResort />} />
        <Route path="/bgccondo" element={<BgcCondo />} />
        <Route path="/bgccamp" element={<BgcCamp />} />
       
      </Routes>
      <ScrollButton />
      <Section />
      <Footer />
    </Router>
  );
};

export default App;
