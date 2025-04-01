import React, { useState, ReactNode} from 'react';
import "./CardContainer.css";

interface CardProps {
  title: string;
  children: ReactNode;
}

const CardContainer: React.FC<CardProps> = (props) => {
  const {title, children} = props

  return (
    <div className="card-container">
      <div className="card-title">
        {title}
      </div>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default CardContainer;
