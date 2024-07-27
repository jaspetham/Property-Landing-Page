"use client";

import React, { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
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
    return (
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
        <hr className="line my-10" />
        <div className="about-main-wrapper gap-12 py-10">
          <div className="about-img-wrapper flex justify-center relative">
            <Parallax translateY={[-10, 40]}>
              <img className="img1" src={data?.aboutImg} alt="aboutImg" />
            </Parallax>
          </div>
          <div className="about-wrapper justify-center flex flex-col gap-6">
            <p className="clr-font fs-100 ff-p-bold uppercase">
              {data?.subTitle}
            </p>
            <h2 className="text-white ff-secondary uppercase leading-tight">
              {data &&
                data.titles.length > 0 &&
                data.titles.map((title: string) => {
                  return (
                    <span>
                      {title} <br />
                    </span>
                  );
                })}
            </h2>
            <div className="pt-5 flex flex-col gap-6">
                {data &&
                  data.descs.length > 0 &&
                  data.descs.map((desc: string) => {
                    return <p className="clr-accent">{desc}</p>;
                  })}
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;
