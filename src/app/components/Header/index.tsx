"use client";

import React, { useState } from "react";
import './Header.css';
import SpecialButton from "../../shared/SpecialButton";

const Header: React.FC = () => {
    const [openNav, setOpenNav] = useState(false);
  return (
    <header className="p-4">
      <div className="mx-auto flex justify-between items-center gap-4">
        <div className="header-left  flex justify-between items-center">
          <div className="text-lg font-bold flex justify-between logo">
            Freehold
          </div>
          <nav className="nav-wrapper">
            <ul className="flex gap-6 font-bold uppercase">
              <li>
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="/facilities" className="hover:text-gray-400">
                  Facilities
                </a>
              </li>
              <li>
                <a href="/floor-plans" className="hover:text-gray-400">
                  Floor Plans
                </a>
              </li>
              <li>
                <a href="/location" className="hover:text-gray-400">
                  Location
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div onClick={() => setOpenNav(!openNav)} id="nav-icon3" className={openNav ? 'open' : ''}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="header-right float-right">
          <SpecialButton text="Schedule a Visit" containerClass="fancy" />
        </div>
      </div>
    </header>
  );
};

export default Header;
