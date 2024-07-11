import React from "react";
import './Hero.css';
import MainButton from "@/app/shared/MainButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero: React.FC = () => {
    return (
      <section className="hero-banner">
        <div className="content w-3/4 flex items-center justify-center">
          <div className="flex justify-between w-full">
            <div className="title-wrapper flex flex-col justify-center gap-6">
              <div className="big-title ff-secondary">
                <h1 className="title fs-1000">The Last</h1>
                <h1 className="title fs-1000">Freehold</h1>
              </div>
              <div className="address p-4 px-8 flex items-center  gap-3">
                <FontAwesomeIcon
                  className="fs-200"
                  icon={["fas", "location-dot"]}
                />
                <p className="fs-200">Malaysia, Puchong</p>
              </div>
            </div>
            <div className="price-wrapper">
              <div className="flex flex-col justify-evenly">
                <p className="uppercase fs-100">Starting from</p>
                <h1 className="price my-5">MYR 410,000</h1>
                <MainButton text={"Take a tour"} />
                <div className="flex gap-3">
                  <p className="fs-100">Contact Me</p>
                  <a
                    href="https://api.whatsapp.com/send?phone=60164928027&text=Hi I am interested in Nara Project"
                    target="_blank"
                    className="fs-100"
                  >
                    +6016-492 8027
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Hero;