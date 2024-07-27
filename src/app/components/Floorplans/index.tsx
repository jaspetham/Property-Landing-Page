"use client";

import React, { useEffect, useState } from "react";
import "./Floorplans.css";
import SectionTitle from "@/app/shared/SectionTitle";

const Floorplans: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const [selected, setSelected] = useState<number>(0);
    useEffect(() => {
       async function fetchData() {
         try {
           const response = await fetch("/api/floorplans");
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
    const handleSelection = (index:number) => {
       setSelected(index);
    }
  return (
    <section id="floorplans" className="py-8 container mx-auto">
      <SectionTitle
        darkMode={true}
        subtitle="floorplans"
        title="Our Floorplans"
      />
      <div className="px-6">
        <div className="flex justify-evenly floorplan-wrapper">
            {data && data.types.length > 0 && data.types.map((type:string, index:number) =>{
                return (
                  <div
                    key={index}
                    onClick={() => handleSelection(index)}
                    className={`floorplan-selection fs-300 px-5 py-8 w-full text-center cursor-pointer ${selected === index ? 'active' : ''}`}
                  >
                    {type}
                  </div>
                );
            })}
        </div>
      </div>
    </section>
  );
};

export default Floorplans;
