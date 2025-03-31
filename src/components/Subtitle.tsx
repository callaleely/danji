import React from 'react';
import './Subtitle.css';

interface SubtitleProps {
  text: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  return (
    <div className="subtitle">
      <p>{text}</p>
    </div>
  );
};

export default Subtitle;
