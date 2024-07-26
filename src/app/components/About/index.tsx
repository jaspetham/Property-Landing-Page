"use client";

import React, { useState, useEffect } from "react";
import "./About.css";

const About: React.FC = () => {
    const [data, setData] = useState<any>(null);
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch("/api/about");
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
    return(
        <section className="py-8 container mx-auto clr-font px-6">
            <div className="flex justify-evenly py-5">
                <div className="info-wrapper">
                    <h2 className="ff-p-bold">{data ? data.squareFeet : 0}</h2>
                    <p className="fs-100">square feets</p>
                </div>
                <div className="info-wrapper">
                    <h2 className="ff-p-bold">{data ? data.bedrooms : 0}</h2>
                    <p className="fs-100">Bedrooms</p>
                </div>
                <div className="info-wrapper">
                    <h2 className="ff-p-bold">{data ? data.bathrooms : 0}</h2>
                    <p className="fs-100">Bathrooms</p>
                </div>
                <div className="info-wrapper">
                    <h2 className="ff-p-bold">{data ? data.carPark : 0}</h2>
                    <p className="fs-100">Side by side Car Park</p>
                </div>
            </div>
            <hr  className="line my-10"/>
            <div className="about-main-wrapper gap-12 py-10">
                <div className="about-img-wrapper flex justify-center relative">
                    <img className="img1" src="/assets/p1.jpg" alt="" />
                </div>
                <div className="about-wrapper justify-center flex flex-col gap-6">
                    <p className="clr-font ff-p-bold uppercase">Puchong Freehold</p>
                    <h3 className="text-white ff-secondary uppercase leading-tight">Natureʼs Tender
                        <br />
                        Embrace Whispers,
                        <br />
                        Evoking a Profound
                        <br />
                        Sense of Awe
                    </h3>
                    <p className="clr-accent">Experience the essence of Living by the Park, NARA at Shorea Park. Step into a world where nature meets urban living, creating a haven for families of all kinds.</p>
                    <p className="clr-accent">Embrace the tranquil beauty of nature-inspired community living as you embark on a new chapter filled with leisure, connection and comfort.</p>
                </div>
            </div>
        </section>
    )
};

export default About;
