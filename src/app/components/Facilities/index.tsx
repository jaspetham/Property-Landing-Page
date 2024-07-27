"use client";

import React, { useState, useEffect } from "react";
import "./Facilities.css";
import SectionTitle from "@/app/shared/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Facilities: React.FC = () => {
      const [data, setData] = useState<any>(null);
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch("/api/facilities");
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
      <section id="facilities" className="pt-8 container mx-auto bg-white">
        <SectionTitle subtitle="highlights" title="Our Facilities" />
        <div className="px-6">
            <div className="flex flex-col gap-6 items-center py-6">
              <img src={data?.facilityImg} alt="facility" />
              <div className="facility-info clr-accent py-4">
                {data && data.facilities.length > 0 && data.facilities.map((facility:string, index:number) =>{
                    return (
                      <div key={index+1} className="info flex gap-3 items-center">
                        <div className="relative">
                          <span className="fs-100 info-circle">{index +1}</span>
                          <FontAwesomeIcon className="scale-125" icon={faCircle} />
                        </div>
                        <span>{facility}</span>
                      </div>
                    );
                })}
              </div>
            </div>
        </div>
          {data?.extraFacilityImg && (
            <img className="extraImg" src={data.extraFacilityImg} alt="extraFacility"/>
          )}
      </section>
    );
};

export default Facilities