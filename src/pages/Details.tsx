import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Subtitle from '../components/Subtitle';
import './Details.css';
import Card from '../components/Card'

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="details-page">
      <Subtitle text={`Details for ID: ${id}`} />
      <p className="details-text">
        This is the details page for the selected item. The ID is <strong>{id}</strong>.
      </p>
      <Card>
        <p>
          test
        </p>
      </Card>
    </div>
  );
};

export default Details;
