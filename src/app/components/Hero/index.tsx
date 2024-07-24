"use client";

import React, { useState, useEffect } from "react";
import "./Hero.css";
import MainButton from "@/app/shared/MainButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Hero: React.FC = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/hero");
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
  }, []);
  return (
    <section className="hero-banner">
      <div className="content w-3/4 flex items-center justify-center">
        <div className="flex justify-between w-full content-wrapper">
          <div className="title-wrapper flex flex-col justify-center gap-6">
            <div className="big-title ff-secondary">
              <h1 className="title fs-1000">{data?.firstTitle}</h1>
              <h1 className="title fs-1000">{data?.secondTitle}</h1>
            </div>
            <div className="address p-4 px-8 flex items-center  gap-3">
              <FontAwesomeIcon
                className="fs-200"
                icon={faLocationDot}
              />
              <p className="fs-200">{data?.location}</p>
            </div>
          </div>
          <div className="price-wrapper">
            <div className="flex flex-col justify-evenly">
              <p className="uppercase fs-100">Starting from</p>
              <h1 className="price my-5">{data?.startingPrice}</h1>
              <MainButton text={"Take a tour"} />
              <div className="flex gap-3 contact-me">
                <p className="fs-100">Contact Me</p>
                <a
                  href={data?.whatsappLink}
                  target="_blank"
                  className="fs-100 underline text-blue-300"
                >
                  {data?.contactNumber}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
