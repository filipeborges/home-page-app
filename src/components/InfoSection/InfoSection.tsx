import React from 'react';
import './InfoSection.css';

interface InfoSectionProps {
  image: string;
  title: string;
  index?: number;
}

function buildInlineStyle(props: InfoSectionProps) {
  const style: React.CSSProperties = {};

  if (typeof props.index === 'number') {
    style.flexDirection = props.index % 2 ? 'row' : 'row-reverse';
  }

  return style;
}

const InfoSection: React.FC<InfoSectionProps> = (props) => {
  return (
    <div
      className="container"
      style={buildInlineStyle(props)}
    >
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