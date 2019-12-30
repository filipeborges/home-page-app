import React from 'react';
import './InfoSection.css';

interface InfoSectionProps {
  image: string;
  title: string;
}

const InfoSection: React.FC<InfoSectionProps> = (props) => {
  return (
    <div className="container">
      <div>
        <img src={props.image} alt="My pic"/>
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.children}</p>
      </div>
    </div>
  );
}

export default InfoSection;