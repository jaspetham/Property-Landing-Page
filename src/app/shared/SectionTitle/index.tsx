"use client";

import "./SectionTitle.css";

interface SectionTitleProps{
    subtitle:string;
    title:string;
    darkMode?:boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({subtitle, title, darkMode}) => {
  return (
    <div className={`section-title text-center uppercase`}>
        <p className="fs-150 clr-font subtitle py-6">{subtitle}</p>
        <h1 className={`ff-secondary my-6 ${darkMode ? 'text-white' :'text-black'}`}>{title}</h1>
    </div>
  );
};

export default SectionTitle;
