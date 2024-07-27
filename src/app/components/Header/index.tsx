"use client";

import React, { useState, useEffect } from "react";
import './Header.css';
import SpecialButton from "../../shared/SpecialButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
    const [openNav, setOpenNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [data, setData] = useState<any>(null);
     useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch("/api/header");
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
          } catch (error) {
            console.error("Failed to fetch data:", error);
          }
        }

       fetchData();

        const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) { // Change 200 to the pixel value you want
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
     }, []);

  return (
    <header className={`p-4${scrolled ? ' scrolled' : ''}`}>
      <div className="flex justify-between items-center gap-4">
        <div className="header-left  flex justify-between items-center">
          {data?.mainTitle && (
            <div className="text-lg font-bold flex justify-between logo">
              {data.mainTitle}
            </div>
          )}
          <nav className={(openNav ? "active " : "") + "nav-wrapper"}>
            <button
              className="close-menu fs-700"
              onClick={() => setOpenNav(false)}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            {data?.navs?.length > 0 && (
              <ul className="flex gap-6 font-bold uppercase">
                {data.navs.map((navItem: { link: string; title: string }) => (
                  <li key={navItem.link}>
                    <a href={navItem.link} className="hover:text-gray-400">
                      {navItem.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </nav>
          <div
            onClick={() => setOpenNav(!openNav)}
            id="nav-icon3"
            className={openNav ? "open" : ""}
          >
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
