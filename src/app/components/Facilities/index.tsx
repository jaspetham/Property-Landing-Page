"use client";

import React, { useState, useEffect } from "react";
import "./Facilities.css";
import SectionTitle from "@/app/shared/SectionTitle";

const Facilities: React.FC = () => {
    return (
      <section className="py-8 bg-white px-6">
        <SectionTitle subtitle="highlights" title="Our Facilities"/>
      </section>
    );
};

export default Facilities