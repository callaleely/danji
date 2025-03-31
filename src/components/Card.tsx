import React, { useState, ReactNode} from 'react';
import "./Card.css";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
  const {children} = props

  return (
    <div className="card-container">
      {children}
    </div>
  );
};

export default Card;
