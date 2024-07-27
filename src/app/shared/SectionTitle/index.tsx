"use client";

import "./SectionTitle.css";

interface SectionTitleProps{
    subtitle:string;
    title:string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({subtitle, title}) => {
  return (
    <div className="section-title text-center uppercase">
        <p className="fs-150 clr-font subtitle py-6">{subtitle}</p>
        <h1 className="text-black ff-secondary my-6">{title}</h1>
    </div>
  );
};

export default SectionTitle;
