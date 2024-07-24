"use client";

import React, { useState, useEffect } from "react";
import "./About.css";
import MainButton from "@/app/shared/MainButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const About: React.FC = () => {
    return(
        <section>
            <div className="flex space-evenly">
                <div className="info-wrapper">
                    <h3>5,620</h3>
                    <p>square feets</p>
                </div>
            </div>
        </section>
    )
};

export default About;
