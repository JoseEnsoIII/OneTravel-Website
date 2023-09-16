import React, { useState } from 'react';
import './App.css';
import RegisterModal from './RegisterModal'; // Update the import path
import LoginModal from './LoginModal'; // Update the import path
function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section
      data-bs-version="5.1"
      className="menu menu3 cid-tEprr0AnWU"
      id="menu3-1q"
    >
      <nav
        className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg custom-navbar"
        style={{ height: "30px", zIndex: 10 }}

      >
        <div className="container">
          <div className="navbar-brand" style={{ marginRight: "50px" }}>
            <a href="/">
              <img
                src="/images/newww-210x116.webp"
                alt=""
                className="mr-10"
                style={{ height: "3.5rem", marginLeft: "13px" }}
              />
            </a>
          </div>

          <ul className="navbar-nav" style={{ columnGap: "20px" }}>
            <li className="nav-item ">
              <a
                className="nav-link link text-white text-primary display-7 "
                href="/"
                target="_blank"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link link text-white text-primary display-7 "
                href="/destination"
              >
                Destination
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link link text-white text-primary display-7 "
                href="/transportation"
              >
                Transportation
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link link text-white text-primary display-7 "
                href="/accomodation"
              >
                Accommodation
              </a>
            </li>
          </ul>

          <div className="icons-menu">
            <a
              className="iconfont-wrapper"
              href="https://www.facebook.com/OneLuxorRealEstateSolutions"
              target="_blank"
            >
              <span
                className="p-2 mbr-iconfont socicon-facebook socicon"
                style={{
                  color: "rgb(219, 188, 50)",
                  fill: "rgb(219, 188, 50)",
                }}
              ></span>
            </a>
          </div>

          <div className="navbar-buttons mbr-section-btn">
            <a
              className="btn btn-warning-outline display-4"
              href="/contact"
              target="_blank"
              style={{ marginLeft: "200" }}
            >
              CONTACT
            </a>
          </div>

         
        </div>
      </nav>

      {isModalOpen && <Modal onClose={toggleModal} />}
    </section>
  );
}

export default Navbar;
