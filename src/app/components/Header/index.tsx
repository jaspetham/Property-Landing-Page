import React from "react";
import './Header.css';
import SpecialButton from "../../shared/SpecialButton";

const Header: React.FC = () => {
  return (
    <header className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="header-left  flex justify-between items-center">
          <div className="text-lg font-bold flex justify-between logo">Puchong Freehold</div>
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

        </div>
        <div className="header-right float-right">
          <SpecialButton text="Schedule a Visit" containerClass="fancy"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
