"use client";

import React, { useState, useEffect } from "react";
import "./Facilities.css";
import SectionTitle from "@/app/shared/SectionTitle";

const Facilities: React.FC = () => {
    return (
      <section className="py-8 bg-white px-6">
        <SectionTitle subtitle="highlights" title="Our Facilities"/>
        <div className="flex justify-center py-6">
            <img src="/assets/facility.png" alt="facility" />
        </div>
      </section>
    );
};

export default Facilities